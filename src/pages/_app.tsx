import '@/styles/globals.css'
import {Nanum_Gothic} from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import {Raleway} from 'next/font/google'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { ConfigProvider } from 'antd'
const nanumGothic = Nanum_Gothic({ subsets: ['latin'],
                                  weight: '700' })
const raleway = Raleway({ subsets: ['latin'],
                                  weight: '200' })
                                 
  type ThemeData = {
  colorPrimary: string;
};

const mainFont = localFont({src:'../../public/TruetypewriterPolyglOTT.ttf'});
const subTitle = localFont({src:'../../public/AcariSans-Medium.ttf'});
export default function App({ Component, pageProps }: AppProps) {
  const defaultData: ThemeData = {
    colorPrimary: '#ff0000',
  };
  return (
    <>
    <style jsx global>{`
      h1,span {
        font-family: ${mainFont.style.fontFamily};
      }
      h2,h3,h4,p{
        font-family: ${subTitle.style.fontFamily};
      }
    `}</style>
     <ConfigProvider
      theme={{ token: defaultData }}
    >
    <Navbar />
    <Component {...pageProps} />
    </ConfigProvider>
  </>
  )
}
