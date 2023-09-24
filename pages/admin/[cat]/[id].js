
import Layout from '@/components/Layout' ;
import { Dbentries01, Dbentries02 } from '@/components/Fragments/Dbentries';

const FourthPage = ({allPages, program, data}) => {

    const page = allPages[0];
    const name = program[0].title

    return (

        <Layout title={name} _name={page._name} _content={page._content} data={data}>
              
            {page?.paragraph.map((mu) => (

                <div key={mu.key} className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
                    {
                        {
                        
                           "d1a": <Dbentries01 section={mu} />,
                           "d2a": <Dbentries02 section={mu} />,
                          
                        }[mu.section]
                    }
                </div>

            ))}

        </Layout>
    
    )
}

export default FourthPage;

export async function getStaticPaths() {

    const { programs } = await import('../../../assets/menu_01.json');

    const program = programs.filter((mu) => mu.parent === "admin")

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

export async function getStaticProps(context)  {

    const id = context.params.id;
    const cat = context.params.cat;

    const {pages} = await import('../../../assets/pages_01.json');

    const {languages} = await import('../../../assets/menu_01.json');
    const {programs} = await import('../../../assets/menu_01.json');  

    const allPages = pages.filter((ev) => ev.id === id)
    const program = programs.filter((ev) => ev.id === id)

    return {
        props: { allPages, id, cat, program, data: { languages, programs } },
    };
}
