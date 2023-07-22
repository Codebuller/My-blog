import React from 'react'
import { Layout, Space } from 'antd';
import { Menu, Switch } from 'antd';
import Link from 'next/link';
import styles from './Navbar.module.css'
export default function Navbar () {
    return (
      <>
        <Menu className={styles.menu} mode='horizontal'  theme='light' >   
            <Menu.Item>
              <Link href='/'>
                  <h1>Главная</h1>
              </Link>
            </Menu.Item>
          
            <Menu.Item>
              <Link href='/blog'>
                 <h1>Блог </h1> 
              </Link>
            </Menu.Item>
       
            <Menu.Item>
              <Link href='/cases'>
                <h1>Проекты</h1>
              </Link>
            </Menu.Item>
          
            <Menu.Item>
              <Link href='/contacts'>
                <h1>Мои контакты</h1>
              </Link>
            </Menu.Item>
        </Menu>
    </>
    )
  }