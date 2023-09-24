import '@/styles/globals.css'

import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import React, { useState } from 'react';
import { DropMenuContext } from "../components/Context" ;
import { LangContext } from "../components/Context" ;

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
 
  const [expand, setExpand] = useState(true);
  const [lang, setLang] = useState("chin");

  const router = useRouter();
  const p = router.asPath.slice(1);

  var r = router.asPath.slice(1);

  if (p === 'accounting/accounting-software-promotion/2001-chin') {
    r = '';
  } else if (p === 'accounting/accounting-software-promotion/1001-chin') {
    r = '';
  } else if (p === 'accounting/accounting-software-promotion/2001-engl') {
    r = 'accounting/accounting-software-promotion/1001-engl';
  } else if (p === 'accounting/accounting-software-promotion/2001-simp') {
    r = 'accounting/accounting-software-promotion/1001-simp';
  } else if (p === 'admin/accounting-software-users-details/1302-engl') {
    r = 'admin/accounting-software-users-details/1302-chin';
  } else if (p === 'admin/accounting-software-users-details/1302-simp') {
    r = 'admin/accounting-software-users-details/1302-chin';
  } else if (p === 'admin/accounting-software-enquiries-listing/1301-engl') {
    r = 'admin/accounting-software-enquiries-listing/1301-chin';
  } else if (p === 'admin/accounting-software-enquiries-listing/1301-simp') {
    r = 'admin/accounting-software-enquiries-listing/1301-chin';
  }

  const canonicalURL = `https://www.linfungaccounting.com/${r}`.split("?")[0];

return (

  <>

  <Head>
    <link rel="canonical" href={canonicalURL} />
  </Head>

  <SessionProvider session={session}>
    <DropMenuContext.Provider value={{expand,setExpand}}>
      <LangContext.Provider value={{lang,setLang}}>
         
        {Component.auth ? (
          <Auth adminOnly={Component.auth.adminOnly}>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}

        <ToastContainer/>
      </LangContext.Provider>
    </DropMenuContext.Provider>
  </SessionProvider>

  </>

  )
}

function Auth({ children, adminOnly }) {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login required');
    },
  });
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (adminOnly && !session.user.isAdmin) {
    router.push('/unauthorized?message=admin login required');
  }

  return children;
}

export default MyApp;
