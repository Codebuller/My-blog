import React, { useState } from "react";
import styles from './FlexDesk.module.css'
const FlexDesk = ( ) =>
{
    let animationId = null;
    const speed = 0.2;
  const [position,setPosition] = useState({x:50,y:50});
  function animate(event) {
    const x = position.x + (event.clientX - position.x) * speed;
    const y = position.y + (event.clientY - position.y) * speed;
    setPosition({x, y});
  }
  

 
  
    return(
    <div className={styles.conteiner} onMouseMove={(event)=>animate(event)}>
        <div className={styles.cursor}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </div>
    )
}
export default FlexDesk;