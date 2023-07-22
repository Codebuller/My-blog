import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { useState,useEffect , useRef} from 'react';
import { Html} from '@react-three/drei';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import styles from './SkillSphere.module.css'
import { extend } from '@react-three/fiber'

const SphereSkills = ({ skills }:{skills:string[]}) => {
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

const handleMouseMove = (event:any) => {
setMousePosition({ x: event.clientX, y: event.clientY });
};
return (
<Canvas onPointerMove={handleMouseMove}>
<ambientLight/>
<SphereWord skills={skills} pos={mousePosition}/>
</Canvas>
);
};

export default SphereSkills;

const SphereWord = ({ skills,pos }:{skills:string[],pos:{x:number,y:number}}) => {
const size= useThree((state)=>state.size);
const mouseX = ((pos.x - size.left) / size.width) * 2 - 1;
const mouseY = -((pos.y- size.top) / size.height) * 2 + 1;

const ROTATION_FACTOR = 1;
const groupRef = useRef<any>();

useFrame(() => {
groupRef.current.rotation.x = mouseX * ROTATION_FACTOR;
groupRef.current.rotation.y = mouseY * ROTATION_FACTOR;
});

return (
<group ref={groupRef} >

<Text skills={skills}/>

</group>
);
};

extend({ TextGeometry })
function Text({skills}:{skills:string[]}) {
return(
<>
{skills.map((skill:string,i:number,array:string[]):any => {

let phi = Math.PI * (Math.sqrt(5) - 1)
let y = 1 - (i /( array.length - 1)) * 2;
let radius = Math.sqrt(1 - y * y);
let theta = phi * i;
let x = Math.cos(theta) * radius;
let z = Math.sin(theta) * radius;

return(
<Html key={i} position={[x*3, y*3, z*3]}>
<span className={styles.names}>{skill}</span>
</Html>
)
})
}
</>
)
}