import React, { useEffect, useState }  from 'react'
import { Layout, Space } from 'antd';
import Navbar from '@/components/navbar/Navbar';
import client from '../../contentful';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Content from '@/components/content/Content';
import Loader from '@/components/loader/Loader';
const { Header, Footer, Sider} = Layout;
export default function Blog ({title,allPosts}:{title:string,allPosts:any}) {
  const [loading,setLoading] = useState(false);
  
 useEffect(()=>{
  const go = setInterval(()=>{
    setLoading(true);
    clearInterval(go);

  },5000)

 },[])
 console.log(allPosts)
    return (
      <>
       <Head>
          <title>Митрофанов Иван Портфолио</title>
        </Head>
       
      {loading ?  <div style={{background:'#f8f8f8'}}>
       
        
        <div style={{paddingTop:'75px'}} className='conteiner' >
        {allPosts.items.map((el:{})=> <Content data={el}/>
          )}
          
        </div>
      </div>
      : <Loader title='Привет' title2='Это мой блог' />
      }
    
      </>
    )
  }
 export const getStaticProps: GetStaticProps = async () =>{
    const allPosts = await client.getEntries({
      content_type: 'post'
    })
    return {
      props:{
         allPosts,
      },
      revalidate: 3600

  
    }
  }