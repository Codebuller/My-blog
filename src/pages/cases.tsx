import React from 'react'
import { Layout, Space } from 'antd';
import Navbar from '@/components/navbar/Navbar';
import SkillSphere from '@/components/skillsSphere/SkillSphere';
const { Header, Footer, Sider, Content } = Layout;
export default function Blog () {
    return (
      <>
     <SkillSphere skills={['React','Next.js','Three.js','PWA','Typescript','CSS','HTML','BEM','ES5/ES6','Ant design','JSON','npm','Git','axios','vite','vercel','API','Emmet']}/>
      </>
    )
  }