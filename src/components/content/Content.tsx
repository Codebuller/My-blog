import React, { useEffect } from 'react';
import { Card, Descriptions } from 'antd';
import Image from 'next/image';
import styles from './Content.module.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
const { Meta } = Card;
const Content = ({data}) => {
    
    const img = data.fields.image.fields.file.url;
    const title = data.fields.title
    const description = data.fields.description
    const rich = documentToReactComponents(data.fields.text)
    return(
    <>
    
         <div className={styles.post}> 
        <h2 className={styles.title} >{title}</h2>
        <Image unoptimized  alt="sorry" quality={100} className={styles.picture} width={200} height={200} src={`http:${img}`} />
        <pre className={styles.text} >{rich}</pre>
        <Link href={`/blog/${data.sys.id}`}>
          <p style={{marginLeft:'25%',color:'blue',overflow:'hidden'}} >Читать...</p>   
        </Link>
    </div>
    
    </>
)
}
export default Content;