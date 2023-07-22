import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { useState, useEffect, useRef, ReactElement, RefObject } from 'react';
import styles from './Iteractivebg.module.css'

import { Html, useGLTF } from '@react-three/drei'
import FlexText from '../flexText/flextText';
import { Vector3 } from 'three';

const Iteractivebg = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event:any) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  const rasparse = (text:string,priority:number):any =>{
    let result:any[] = []; 
    
    let start = 0;
    for(let i = 0;i<text.length;++i){
      if(text[i]===' '){
        result.push(<span style={{width:'0.5em'}}> </span>)
        continue;
      }
        start=i*0.04+priority;    
   result.push(<FlexText priority={start} text={text[i]}/>)
    }
   return result;
  }
  return (
    <Canvas resize={{scroll: false}}  onPointerMove={handleMouseMove} onPointerLeave={handleMouseMove}>
       
      <ambientLight />
      <group>
        <Models mouse={mousePosition} />
      </group>
      <Html position={[-9,3,0]}>
      
        <h1  className={styles.flexText}>
            {rasparse('Привет,',1).map((el:ReactElement|Element)=>el)}
          </h1>
          <h1  className={styles.flexText}>
            {rasparse('Я - Митрофанов Иван,',2).map((el:ReactElement|Element)=>el)}
          </h1>
          <h1   className={styles.flexText}>
            {rasparse('Frontend-разработчик',3).map((el:ReactElement|Element)=>el)}
          </h1>
        
      </Html>
    </Canvas>
  )
};

export function Models({ mouse }:{mouse:{x:number,y:number}}) {
  const size = useThree((state) => state.size);
  const mouseX = ((mouse.x - size.left) / size.width) * 2 - 1;
  const mouseY = -((mouse.y - size.top) / size.height) * 2 + 1;
  const ROTATION_FACTOR = 0.5;
  const targetRotationX = -mouseY * ROTATION_FACTOR;
    const targetRotationY = -mouseX * ROTATION_FACTOR;
  
  const diaryRef = useRef<any>();
  const penRef = useRef<any>();
  const cupRef = useRef<any>();
  const lisaRef = useRef<any>();
  const jornalRef = useRef<any>();
  useFrame(() => {
    

    diaryRef.current.rotation.x = lerp(diaryRef.current.rotation.x, targetRotationX, 0.1);
    diaryRef.current.position.x = mouseX*0.5;

    penRef.current.rotation.x = lerp(penRef.current.rotation.x, targetRotationX, 0.1);
    penRef.current.position.x = mouseX*0.5;

    cupRef.current.rotation.x = lerp(cupRef.current.rotation.x, targetRotationX, 0.1);
    cupRef.current.position.x = mouseX*0.5;

    lisaRef.current.rotation.x = lerp(lisaRef.current.rotation.x, targetRotationX*0.5, 0.1);
    lisaRef.current.position.x = mouseX*0.5;

    jornalRef.current.rotation.x = lerp(jornalRef.current.rotation.x, targetRotationX, 0.1);
    jornalRef.current.position.x = mouseX*0.5;
    
  
  });

  // Функция для линейной интерполяции
  const lerp = (start:number, end:number, alpha:number) => {
    return start * (1 - alpha) + end * alpha;
  };

  return (
    <group>
      <mesh ref={diaryRef}>
        <Diary position={[1, -1, 0]} />
      </mesh>
      <mesh ref={penRef}>
        <Pen position={[1.5, -1, 0]} />
      </mesh>
      <mesh ref={cupRef}>
        <Cup position={[7, -1, -1]} />
      </mesh>
      <mesh ref={jornalRef}>
        <Jornal position={[-9, -1, 0]}  />
      </mesh>
      <mesh ref={lisaRef}>
        <Lisa position={[0,1,0]}/>
      </mesh>
      
    </group>
  )
}

const Cup = ({position}:{position:any}) => {
  const { nodes, materials }:any = useGLTF('/models/cup/cup-transformed.glb')

  return (
    <group scale={10} position={position} dispose={null}>
      <mesh geometry={nodes.Object_31.geometry} material={materials.Coffee} position={[0.001, 0.082, 0]} rotation={[-Math.PI, 1.031, -Math.PI]} />
      <mesh geometry={nodes.Object_33.geometry} material={materials.material} position={[0, 0.005, 0]} />
      <mesh geometry={nodes.Object_35.geometry} material={materials.Plate} position={[0.001, 0, 0]} />
      <instancedMesh args={[nodes.Object_0.geometry, materials.Marshmallow, 13]} instanceMatrix={nodes.Object_0.instanceMatrix} />
    </group>
  )
}

const Diary = ({position}:{position:any}) =>{
    const { nodes, materials }:any = useGLTF('/models/diary/diary-transformed.glb')
    return(
        <group  position={position} dispose={null} rotation={[0, Math.PI/5, 0]}>
        <mesh scale={0.01}  geometry={nodes.Object_2.geometry} material={materials['Notebook_-_Bookmark_material_aaec1194-aed2-438d-8e83-467bdea73316']}  />
        <mesh scale={0.01} geometry={nodes.Object_3.geometry} material={materials['Notebook_-_Cover_material_eaac6572-c2e2-422b-a048-a5a0924be67e']}  />
        <mesh scale={0.01} geometry={nodes.Object_4.geometry} material={materials['Notebook_-_Pages_material_c56d1ce9-2cb1-464f-a876-67ddc7e05499']}  />
        <mesh scale={0.01} geometry={nodes.Object_5.geometry} material={materials['Notebook_-_Strap_material_40dd07b3-3b05-42fd-9b42-7692bd2efeab']}  />
      </group>
    )
}
const Pen = ({position}:{position:any}) =>{
    const { nodes, materials }:any = useGLTF('/models/pen/pen-transformed.glb')
    return (
        <group position={position} scale={0.08} dispose={null}>
        <mesh geometry={nodes.pCylinder1_aiStandardSurface1_0.geometry} material={materials.aiStandardSurface1} position={[0.479, 4.256, 1.742]} rotation={[-0.492, 0.245+Math.PI/5, 1.34]} scale={[1.095, 1, 1.179]} />
        <mesh geometry={nodes.pCylinder1_aiStandardSurface2_0.geometry} material={materials.aiStandardSurface2} position={[0.479, 4.256, 1.742]} rotation={[-0.492, 0.245+Math.PI/5, 1.34]} scale={[1.095, 1, 1.179]} />
      </group>
    )
}
 function Jornal({position}:{position:any}) {
    const { nodes, materials }:any = useGLTF('/models/new/scene-transformed.glb')
    return (
      <group position={position} dispose={null}>
        <mesh geometry={nodes.Journal_journal_0.geometry} material={materials.journal} rotation={[0, -Math.PI*1.3, 1]} scale={8} />
      </group>
    )
  }
  
function Lisa({position}:{position:any}) {
    
    const { nodes, materials }:any = useGLTF('/models/lisa/scene-transformed.glb')
  return (
    <group scale={0.02} position={position} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Material_27} position={[-8.494, 51.339, -15.709]} rotation={[0, 0, -Math.PI]} />
    </group>
  )
}

  
useGLTF.preload('/models/lisa/scene-transformed.glb')
useGLTF.preload('/models/new/scene-transformed.glb')
useGLTF.preload('/models/pen/pen-transformed.glb')
useGLTF.preload('/models/diary/diary-transformed.glb')
useGLTF.preload('/models/cup/cup-transformed.glb')

export default Iteractivebg;
