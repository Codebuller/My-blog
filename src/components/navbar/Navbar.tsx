import React from 'react'
import { Layout, MenuProps, Space } from 'antd';
import { Menu, Switch } from 'antd';
import Link from 'next/link';
import styles from './Navbar.module.css'
export default function Navbar () {

  const items: MenuProps['items'] = [ 
    {
      label: (
        <Link href="/">
          <h1>Главная</h1>
        </Link>
      ),
      key: 'main',
    },
    {
      label: (
        <Link href="/blog">
          <h1>Блог</h1>
        </Link>
      ),
      key: 'blog',
    },
    {
      label: (
        <Link href="/cases" >
         <h1>Проекты</h1>
        </Link>
      ),
      key: 'cases',
    },
    {
      label: (
        <Link href="/contacts" >
          <h1>Мои контакты</h1>
        </Link>
      ),
      key: 'contacts',
    },
  ];
    return (
      <>
        <Menu items={items} className={styles.menu} mode='horizontal'  theme='light' />   
            
    
    </>
    )
  }