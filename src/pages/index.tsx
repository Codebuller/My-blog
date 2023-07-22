import React, { ReactElement, useEffect, useState } from 'react'
import styles from '../styles/index.module.css'
import FlexText from '@/components/flexText/flextText';
import { Button } from 'antd';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import client from '../../contentful';
import SkillSphere from '@/components/skillsSphere/SkillSphere';
import Iteractivebg from '@/components/interactivebg/Interactivebg';
export default function Home ({Logo}:{Logo:string}) {
  const [active,setActive] = useState(false);
  
  const rasparse = (text:string,priority:number):any =>{
    let result:any[] = []; 
    
    let start = 0;
    for(let i = 0;i<text.length;++i){
      if(text[i]===' '){
        result.push(<span> </span>)
        continue;
      }
        start=i*0.04+priority;    
   result.push(<FlexText priority={start} text={text[i]}/>)
    }
   return result;
  }
  const [size,setSize] = useState([1280,750])
  useEffect(
    ()=>{setSize([window.innerWidth,window.innerHeight])
    console.log(size)
    },
  [])
  
  return (<>
    <div className={styles.background}>
    
      <div className={styles.test}>
        <Iteractivebg/>
      </div>
      
      
      
      <Image unoptimized  alt="sorry" quality={100} className={styles.picture} width={720} height={1280} src={`http:${Logo}`}  />
      <div className={styles.buttons}>
      <Button  className={styles.btn}><h3>Свзаться со мной</h3></Button>
          {/* <Button className={styles.btn}><h3>Скачать резюме</h3></Button> */}
          </div >   
      <div className={styles.canvas}>
        <SkillSphere skills={['React','Next.js','Three.js','PWA','Typescript','CSS','HTML','BEM','ES5/ES6','Ant design','JSON','npm','Git','axios','vite','vercel','API','Emmet']}/> 
      </div>    
          
         
    </div>
    
    </>
  )
}
export const getStaticProps: GetStaticProps = async () =>{
  const allPosts:any = await client.getEntries({
    content_type: 'imageLogo'
  })
  const Logo = allPosts.items[0].fields.img.fields.file.url;
  return {
    props:{
       Logo
    },
    revalidate: 3600


  }
}