import { useRouter } from 'next/router';
import React from 'react';
import { useContext } from 'react';
import { LangContext } from "@/components/Context"
import Layout from '@/components/Layout' ;


const Unauthorized = ({data}) => {

  const router = useRouter();
  const { message } = router.query;
  const { lang } = useContext(LangContext);
  
  const page = 'Unauthorized'
  const name = 'Unauthorized'

  const dictionary_11 = {
    "chin" : "會員專區",
    "engl" : "Members Only",
    "simp" : "会员专区"
  }

  const dictionary_12 = {
    "chin" : "請先登入會員",
    "engl" : "Login Required",
    "simp" : "请先登入会员"
  }

  return (
      <Layout title={name} _name={name} _content={page} data={data}>

      <>
      <h1 className="text-xl">{dictionary_11[lang]}</h1>
      <div>
      {message && <div className="mb-4 text-blue-500">{dictionary_12[lang]}</div>}
      </div>
      </>
     
      </Layout>
  )
}

export default Unauthorized;

export async function getStaticProps() {

  const {languages} = await import('@/assets/menu_01.json');
  const {programs} = await import('@/assets/menu_01.json');

  return {
    props: {
      data: { languages, programs }
    },
  };
  
}
