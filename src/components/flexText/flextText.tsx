import React, { useEffect, useState } from "react";
import styles from './flexText.module.css'
const FlexText = ({text,priority}:{text:string,priority:number})=>{
    const [active,setActive] = useState(false);
    const [animating,setAnimating] = useState(false);
    useEffect(()=>{
        const go = setInterval(
          ()=> {setActive(!active); }
           ,750*priority
        )
        
        },[])
        const Animate=()=>{
        const anima = setInterval(
            ()=>{setAnimating(false);clearInterval(anima)}
        ,1000)
        setAnimating(true);
        }    
    return (
        <span 
        style={{fontSize:'max(24px,3vw)',display:'inline-block'}} 
        className={active ? animating ? `${styles.blast} ${styles.first} ${styles.second}`   : styles.blast : styles.unvisiable}
        onMouseEnter={()=>Animate()}
         >{text}</span>
    )
}
export default FlexText;