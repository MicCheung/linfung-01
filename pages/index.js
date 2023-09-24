
import { LangContext } from "@/components/Context";
import { useContext, useEffect } from 'react';

import Layout from '@/components/Layout' ;
import { Header01, Header02, Header03, Header2a } from '@/components/Fragments/Headers';
import { Picture01 } from '@/components/Fragments/Pictures';
import { Spacing01, Spacing02, Spacing03, Spacing21 } from '@/components/Fragments/Spacing';
import { Table01a, Table02a, Table03a, Table04a, Table05a, Table06a } from '@/components/Fragments/Tables';
import { Link01a, Link02a, Link03a, Link04a, Link05a } from '@/components/Fragments/LinkButtons';
import { Video01 } from '@/components/Fragments/Videos';
import { ContactF_01 } from '@/components/Fragments/Contact';
import { Columns01 } from '@/components/Fragments/Columns';
import { KeyGen01a } from '@/components/Fragments/KeyGen01';
import { KeyGen02a } from '@/components/Fragments/KeyGen02';
import { KeyGen03a } from '@/components/Fragments/KeyGen03';
import { LoginScreen } from '@/components/Fragments/Login';
import { RegisterScreen } from '@/components/Fragments/register';
import { Paypal01, Paypal02, Paypal03 } from '@/components/Fragments/Paypal';

const Home = ({allPages, downloads, musers, program, data}) => {

  const {lang, setLang} = useContext(LangContext);

  const lang0 = lang ;
 
  useEffect(()=>{
    setLang(lang0);
  },[])

  const page = allPages[0];
  const name = program[0].title

  return (
    <Layout title={name} _name={page._name} _content={page._content} data={data}>

        {page?.paragraph.map((mu) => (

            <div key={mu.key} className="px-2">
                {
                    {
                       "h1a": <Header01 section={mu} />,
                       "h6a": <Header2a section={mu} />,
                       "h1b": <Header02 section={mu} />,
                       "h2a": <Header03 section={mu} />,
                       "src": <Picture01 section={mu} />,
                       "lin": <Spacing01 />,
                       "l2a": <Spacing02 />,
                       "l3a": <Spacing03 />,
                       "l21": <Spacing21 />,
                       "t1a": <Table01a section={mu} />,
                       "t2a": <Table02a section={mu} />,
                       "t3a": <Table03a section={mu} />,
                       "t4a": <Table04a section={mu} />,
                       "t5a": <Table05a section={mu} />,
                       "t6a": <Table06a section={mu} />,
                       "b1a": <Link01a section={mu} />,
                       "b2a": <Link02a section={mu} />,
                       "b3a": <Link03a section={mu} />,
                       "b4a": <Link04a section={mu} />,
                       "b5a": <Link05a section={mu} />,
                       "k1a": <KeyGen01a section={mu} downloads={downloads} />,
                       "k2a": <KeyGen02a section={mu} downloads={musers} />,
                       "k3a": <KeyGen03a section={mu} />,
                       "v1a": <Video01 section={mu} />,
                       "c1a": <ContactF_01 section={mu} />,
                       "L1a": <Columns01 section={mu} />,
                       "L2a": <LoginScreen section={mu} />,
                       "L3a": <RegisterScreen section={mu} />,
                       "p01": <Paypal01 section={mu} />,
                       "p02": <Paypal02 section={mu} />,
                       "p03": <Paypal03 section={mu} />
                    }[mu.section]
                }
            </div>

        ))}
     
    </Layout>
)

}

export default Home;

export async function getStaticProps() {

  const id = "1000-chin";

  const {pages} = await import('@/assets/pages_01.json');

  const {languages} = await import('@/assets/menu_01.json');
  const {programs} = await import('@/assets/menu_01.json');  
  const {downloads} = await import('@/assets/menu_01.json');  
  const {musers} = await import('@/assets/menu_01.json');  

  const allPages = pages.filter((ev) => ev.id === id)
  const program = programs.filter((ev) => ev.id === id)

  return {
      props: { allPages, id, downloads, musers, program, data: { languages, programs }},
  };
}
