
import Layout from '@/components/Layout' ;
import { Header01, Header02, Header03 } from '@/components/Fragments/Headers';
import { Picture01 } from '@/components/Fragments/Pictures';
import { Spacing01, Spacing02 } from '@/components/Fragments/Spacing';
import { Table01a, Table02a, Table03a, Table04a } from '@/components/Fragments/Tables';
import { Link01a, Link02a } from '@/components/Fragments/LinkButtons';
import { Video01 } from '@/components/Fragments/Videos';

const SecondPage = ({allPages, program, data}) => {

    const page = allPages[0];
    const name = program[0].title

    return (
        <Layout title={name} _name={page._name} _content={page._content} data={data}>

            <div key="f001" className="grid md:grid-cols-7 w-full">

                <div key="f002" className='md:col-span-4 md:pr-7'>

                    {page?.paragraph?.map((mu) => (

                        <div key={mu.key} className="px-2" >
                            {
                                {
                                   "h1a": <Header01 section={mu} />,
                                   "h1b": <Header02 section={mu} />,
                                   "h2a": <Header03 section={mu} />,
                                   "src": <Picture01 section={mu} />,
                                   "lin": <Spacing01 />,
                                   "l2a": <Spacing02 />,
                                   "t1a": <Table01a section={mu} />,
                                   "t2a": <Table02a section={mu} />,
                                   "t3a": <Table03a section={mu} />,
                                   "t4a": <Table04a section={mu} />,
                                   "b1a": <Link01a section={mu} />,
                                   "b2a": <Link02a section={mu} />,
                                   "v1a": <Video01 section={mu} />
                                }[mu.section]
                            }
                        </div>

                    ))}

                </div> 

                <div key="f003" className='md:col-span-3 px-2 '>
                   
                    {page?.videos?.map((mu) => (

                        <div key={mu.key} >

                            {
                                {
                                    "h1a": <Header01 section={mu} />,
                                    "h1b": <Header02 section={mu} />,
                                    "h2a": <Header03 section={mu} />,
                                    "src": <Picture01 section={mu} />,
                                    "lin": <Spacing01 />,
                                    "l2a": <Spacing02 />,
                                    "t1a": <Table01a section={mu} />,
                                    "t2a": <Table02a section={mu} />,
                                    "t3a": <Table03a section={mu} />,
                                    "t4a": <Table04a section={mu} />,
                                    "b1a": <Link01a section={mu} />,
                                    "b2a": <Link02a section={mu} />,
                                    "v1a": <Video01 section={mu} />
                                }[mu.section]
                            }
                        </div>

                    ))}

                </div>   

            </div>
         
        </Layout>
    )
}

export default SecondPage;

export async function getStaticPaths() {

    const { programs } = await import('../../../assets/menu_01.json');

    const program = programs.filter((mu) => mu.parent === "videos")

    const allPaths = program.map((path) => {
        return {
            params : {
                cat: path.description.toString(),
                id: path.id.toString(),
            },
        };
    });

    return {
        paths: allPaths,
        fallback: false
    };
}

export async function getStaticProps(context) {

    const id = context.params.id;
    const cat = context.params.cat;

    const {pages} = await import('../../../assets/pages_01.json');

    const {languages} = await import('../../../assets/menu_01.json');
    const {programs} = await import('../../../assets/menu_01.json');  

    const allPages = pages.filter((ev) => ev.id === id)
    const program = programs.filter((ev) => ev.id === id)

    return {
        props: { allPages, id, cat, program, data: { languages, programs }},
    };
}