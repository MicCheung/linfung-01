
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { signOut, useSession } from 'next-auth/react';

import {

  MdOutlineAnalytics,
 
  MdOutlineSettings,
  MdOutlineLogout,
  MdLogin,
  MdVideoLibrary,
  MdOutlineContactSupport,
} from "react-icons/md";

import {
 
  FcSupport,
} from "react-icons/fc";  

import {
  GoDesktopDownload
} from "react-icons/go";  

import {
  GiHummingbird
} from "react-icons/gi";  

import {
  TiBusinessCard
} from "react-icons/ti";  

import { DropMenuContext } from "./Context"
import { LangContext } from "./Context"

import {
  AiOutlineCaretLeft,
  AiOutlineCaretDown,
} from "react-icons/ai";

//import dynamic from 'next/dynamic'

import React, { useContext, useEffect, useState} from 'react';

import { useRouter } from 'next/router';

import { Popover } from '@headlessui/react'

//function Layout({ title, data, children }) {
 
export default function Layout({ title, _name, _content, data, children }) {  

  const { status, data: session } = useSession();

  const [navbar, setNavbar] = useState(false);
  const {expand, setExpand} = useContext(DropMenuContext);
  const {lang, setLang} = useContext(LangContext);

  const router = useRouter();

  const adminTitle = '行政項' ;
  const adminMenu = ['查詢清單','會員資料'];

  const langs = data.languages ;
  const progs = data.programs.filter((mu) => mu.lang === lang).filter((mu) => mu.cat === "01") ;
  const login = data.programs.filter((mu) => mu.lang === lang).filter((mu) => mu.cat === "02")
  const clang = data.programs.filter((mu) => mu.lang === lang).filter((mu) => mu.cat === "03")
  const lgout = data.programs.filter((mu) => mu.lang === lang).filter((mu) => mu.cat === "04")
  const greet = data.programs.filter((mu) => mu.lang === lang).filter((mu) => mu.cat === "05")

  function changeLanguages(lang) {
    if (router.asPath === "/") {
      router.push("/accounting/accounting-software-promotion/1001-"+lang);
    } else {
    if (router.asPath.slice(-1) === "#") {
      router.push(router.asPath.substring(0,router.asPath.length-5)+lang)
    } else {
      router.push(router.asPath.substring(0,router.asPath.length-4)+lang)
    }}
    setLang(lang);
  }

  function adminMenus(menu) {
    if (menu === 0) {
      router.push('/admin/accounting-software-enquiries-listing/1301-chin')
    }
    if (menu === 1) {
      router.push('/admin/accounting-software-users-details/1302-chin')
    } 
  }

  useEffect(()=>{
  })

  let logTitle = "";
  let greeting = "";

  if (status !== 'loading') {
    if ( session?.user ) {
      
      logTitle = lgout[0].title 
      greeting = greet[0].title 

    } else {

      logTitle = login[0].title 

    }}

    const logoutClickHandler = () => {
      signOut({ callbackUrl: '/' });
    };

  return (
    <>
      <Head>
        <title>{title ? title + ' - Giga Accounting Software' : 'Giga Accounting Software'}</title>
        <meta name={_name} content={_content}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div key="a001" className="flex min-h-screen flex-col justify-between ">
        <header >
          <nav className="flex items-center px-2 py-2 justify-between shadow-md md:px-10">
            <div key="a002" className='flex flex-row cursor-pointer'>
              <Link key="a003" href="/">
                {/* LOGO */}
                <Image
                  src="/5396621-02.jpg"
                  width={55}
                  height={55}
                  alt="logo"
                  className="focus:border-none active:border-none"
                  onClick={() => setNavbar(false)}
                />
              </Link>
              <div key="a004">&nbsp;&nbsp;</div>
              <Link key="a005" href="/">
                {/* LOGO */}
                <Image
                  src="/lin-fung-accounting-03.png"
                  width={250}
                  height={50}
                  alt="logo"
                  className="focus:border-none active:border-none"
                  onClick={() => setNavbar(false)}
                />
              </Link>
            </div>
            <div key="a006">    
              <Link key="a007" href="/login">
                <a key="a008" className="p-2"></a>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div key="a009" className="md:hidden">
                <button
                  key="a010" 
                  className="p-2 mb-5 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                  >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                      ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main key="d001" className='flex min-h-min flex-col justify-between bg-gray-200 w-full shadow-md'>
          <div key="d002" className=" md:hidden block">

          {status === 'loading' ? ( '' ) : session?.user ? (

              <div key="d003" className="pt-1 mt-1 px-2 text-xl text-bold italic md:text-xl text-gray-900 ">
                {greeting},&nbsp;{session.user.name}                   
              </div>       

           ): ('')}

          </div>
        </main>

        <section key="a011" className='flex min-h-min flex-col justify-between bg-gray-200 w-full shadow-md'>
          <div key="a012" className="grid  md:grid-cols-4 justify-items-end">

            <div key="a013" className='hidden md:block mb-2 md:col-span-1'>
              <div key="a014" className={` ${expand ? 'md:block' : 'md:hidden'} `}>
                <AiOutlineCaretLeft key="a015" className="hidden md:block text-2xl mt-4 text-gray-600 group-hover:text-white " onClick={() => setExpand(false)} />
              </div>
              <div key="a016" className={` ${expand ? 'md:hidden' : 'md:block'} `}>
                <AiOutlineCaretDown key="a017"  className="hidden md:block text-2xl mt-4 text-gray-600 group-hover:text-white " onClick={() => setExpand(true)} />
              </div>
            </div>  
            
            <div key="a018" className="col-span-1 mb-2 md:mb-0 pt-2 pr-3 px-2 md:px-6 flex flex-row gap-1 md:gap-3 md:col-span-3">

              <div key="a019" className="hidden md:block md:py-1 md:mt-1 px-2">

                {status === 'loading' ? ( '' ) : session?.user ? (

                  <div key="a020" className="text-xl text-bold italic md:text-xl text-gray-900 ">
                     {greeting},&nbsp;{session.user.name}                   
                  </div>

                ): ('')}

              </div>

              {status === 'loading' ? ( 'Loading' ) : session?.user?.isAdmin && 

              <div key="r021" className="py-0 md:py-1 group cursor-pointer px-1 md:mb-1 ">
                <h3 key="r022" className="text-sm md:text-base text-gray-800 group-hover:text-white font-semibold">
                  <Popover key="r001" className="relative">
                    <Popover.Button key="r002" className="text-base md:text-base text-gray-800 items-center border-2 border-gray-600 rounded-md py-1 md:px-2 px-2 hover:bg-gray-900 hover:text-white group cursor-pointer hover:shadow-lg m-auto">🚀&nbsp;{adminTitle}&nbsp;▼</Popover.Button>
                     <img src="/" alt="" />
                    <Popover.Panel key="r003" className="absolute z-10">
                      {adminMenu?.map((mu,i) => ( 
                      <div key={'r031'+i}  className="grid grid-cols-1 gap-1 mt-5">                   
                        <a key={'r032'+i}  href="#" className="px-5 py-2 w-full border-2 rounded-md border-gray-600 bg-green-600 hover:bg-gray-600 group cursor-pointer hover:shadow-lg m-auto" onClick={()=>{adminMenus(i)}}>{mu}</a>
                      </div>
                      ))}
                    </Popover.Panel>
                  </Popover>
                </h3>
              </div>

              }

              <div key="a021" className="py-0 md:py-1 group cursor-pointer px-1 md:mb-1 ">
                <h3 key="a022" className="text-sm md:text-base text-gray-800 group-hover:text-white font-semibold">
                  <Popover key="c001" className="relative">
                    <Popover.Button key="c002" className="text-base md:text-base text-gray-800 items-center border-2 border-gray-600 rounded-md py-1 md:px-2 px-2 hover:bg-gray-900 hover:text-white group cursor-pointer hover:shadow-lg m-auto">🚩&nbsp;{clang[0].title}&nbsp;▼</Popover.Button>
                     <img src="/" alt="" />
                    <Popover.Panel key="c003" className="absolute z-10">
                      {langs?.map((mu) => ( 
                      <div key={mu.lang} className="grid grid-cols-1 gap-1 mt-5">                   
                        <a key={mu.lang} href="#" className="px-5 py-2 w-full border-2 rounded-md border-gray-600 bg-green-600 hover:bg-gray-600 group cursor-pointer hover:shadow-lg m-auto" onClick={()=>{changeLanguages(`${mu.lang}`)}}>{mu.title}</a>
                      </div>
                      ))}
                    </Popover.Panel>
                  </Popover>
                </h3>
              </div>

              <div key="a024" className="col-span-1 md:py-1 md:mb-2 px-2 flex flex-row text-base font-semibold md:text-base items-center hover:text-white hover:bg-gray-900 rounded-md border-2 border-gray-600 group cursor-pointer hover:shadow-lg md:m-auto">

                {status === 'loading' ? ( 'Loading ' ) : session?.user ? (

                  <> 
                  <MdOutlineLogout key="a026" className="text-base md:text-base text-gray-600 group-hover:text-white mr-3 " />
                  <a
                     key="logout"  
                    className=""
                    href="#"
                    onClick={logoutClickHandler}
                    >
                    {logTitle}
                  </a>
                  </>

                ) : (

                  <>
                  <MdLogin key="a025" className="text-base md:text-base text-gray-600 group-hover:text-white mr-1 " />
                  <Link key="login" href={`/accounting/users-login/1203-${lang}`}>           
                    {logTitle}
                  </Link>
                  </>

                )}

              </div>

            </div>
          </div>
        </section>
        <main key="a027" className="container m-auto mt-8 md:mt-7 px-6 min-w-full">
          <div key="a028" className="grid md:grid-cols-4">
            <div key="a029" className={` ${expand ? 'md:block' : 'md:hidden'} `}>
            <div key="a030" className={`md:col-span-1 min-h-screen px-5 w-11/12 items-center ${navbar ? 'block' : 'hidden md:block'}`} >
              <ul key="a031" className="w-12/12">
                  {progs?.map((mu,index) => ( 
                  <li key={mu.id} className="border-gray-300 border-4" >       
                    <Link key={mu.id} href={`/${mu.parent}/${mu.description}/${mu.id}`} >
                      <div key="a032" className="grid grid-cols-6 flex mb-0 justify-start items-center gap-4 pl-5 hover:bg-green-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <div className="col-span-1 text-2xl md:text-xl text-gray-600 group-hover:text-white ">
                          {
                            {
                              0: <MdOutlineAnalytics />,
                              1: <GoDesktopDownload />,
                              2: <MdVideoLibrary />,
                              3: <GiHummingbird />,
                              4: <MdOutlineSettings />,
                              5: <TiBusinessCard />,
                              6: <FcSupport />,
                              7: <MdOutlineContactSupport />
                            }[index]
                          }
                        </div>
                        <h3 key={mu.id} className="col-span-5 text-xl md:text-xl text-gray-800 group-hover:text-white font-semibold " onClick={() => setNavbar(false)}>
                          {mu.title}
                        </h3>
                      </div>
                    </Link> 
                  </li>   
                  ))}      
              </ul>
            </div>  
            </div>
            <div key="a034" className= {`md:col-span-3 px-1 md:px-10 ${expand ? 'md:col-span-3' : 'md:col-span-4'}`}>
              {children}
            </div>    
          </div>  
        </main>
        <footer key="a035" className="flex py-2 justify-center items-center shadow-inner">
          <p>Copyright © 2011 Lin Fung Accounting</p>
        </footer>
      </div>
    </>
  );
}                  

//export default dynamic(() => Promise.resolve(Layout),{ssr:false})
