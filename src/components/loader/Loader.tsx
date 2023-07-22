import React from "react"; 
import styles from './Loader.module.css'
import Head from "next/head";
const Loader = ({title,title2}:{title:string,title2:string}) =>{

return(<>
    <Head>
        <title>Загрузка...</title>
    </Head>

    <div className={styles.container}>
    <div className={styles.box}>

        <div className={styles.title}>
            <span className={styles.block}></span>
            <h1>{title}<span></span></h1>
        </div>

        <div className={styles.role}>
            <div className={styles.block}/>
            <p>{title2}</p>
        </div>

    </div>
</div>
</>

)
}
export default Loader;