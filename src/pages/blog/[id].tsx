import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import client from '../../../contentful';
import { GetStaticPaths, GetStaticProps} from 'next';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import styles from './[id].module.css'
import Image from "next/image";
import Loader from "@/components/loader/Loader";
const BlogPage = ({Post}) =>{
    const [loading,setLoading] = useState(false);
 useEffect(()=>{
  const go = setInterval(()=>{
    setLoading(true);
    clearInterval(go);

  },2500)

 },[])
const router = useRouter();
const {id} = router.query;
const img = Post.fields.image.fields.file.url;
const title = Post.fields.title
const description = Post.fields.description
const rich = documentToReactComponents(Post.fields.text)

return(
<>
<Head>
    <title>{title}</title>
</Head>
{loading?<div>
    <h1 className={styles.title}>{title}</h1>
<Image unoptimized  alt="sorry" quality={100} className={styles.picture} width={200} height={200} src={`http:${img}`} />
<pre className={styles.text} >{rich}</pre>

</div>
 :<Loader title='Ожидание' title2='Порождает покой'/>
 }

</>

)

}

  export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    const allPosts = await client.getEntries({
        content_type: 'post'
      })
      const allSlugs:string[] =[];
      allPosts.items.map((el)=>{allSlugs.push({
        params:{id: el.sys.id}
        })});
    return {
        paths: allSlugs, //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}
export const getStaticProps:GetStaticProps = async (context) =>{
    const id = context.params.id;
    const allPosts = await client.getEntries({
        content_type: 'post'
      })
      let Post = null;
      allPosts.items.map((el)=>{
        if(el.sys.id === id){
        Post = el
        
        }
      })
      return {
        props:{
           Post,
        },
        revalidate: 3600
      }

}
export default BlogPage;