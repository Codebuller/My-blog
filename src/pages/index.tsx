import React, { useEffect, useState } from 'react'
import styles from '../styles/index.module.css'
import FlexText from '@/components/flexText/flextText';
import { Button } from 'antd';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import client from '../../contentful';
import SkillSphere from '@/components/skillsSphere/SkillSphere';
import Iteractivebg from '@/components/interactivebg/Interactivebg';
export default function Home ({Logo}:{Logo:string}) {
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