
import Link from 'next/link';

export const Table01a = ({section}) => {

    return (
        <>
        <h2 key={section.key} className="text-xl md:text-2xl font-bold underline underline-offset-4">
            <div className=" p-5 ">
                {section.content}
            </div>
        </h2>   
        <ul className="list-disc">
            {section.items?.map((item, i) => (
                <li key={i} className="text-base md:text-xl py-1">
                    {item}
                </li>
            ))}
        </ul>
        </>        
    );
}

export const Table02a = ({section}) => {

    return (
        <div key={section.key} className="text-base md:text-xl">
            {section.content}
        </div>
    );
}

export const Table03a = ({section}) => {

    return (
        <>
        <h2 key={section.key} className="text-xl md:text-xl ">
            <div className=" p-5 ">
                {section.content}
            </div>
        </h2>   
        <ul className="list-disc">
            {section.items?.map((item, i) => (
                <li key={i} className="text-base md:text-xl py-1">
                    {item}
                </li>
            ))}
        </ul>
        </>        
    );
}

export const Table04a = ({section}) => {

    return (
        <>
        <h2 key={section.key} className="text-xl md:text-xl  underline underline-offset-4 ">
            <div className=" p-5 ">
                {section.content}
            </div>
        </h2>   
        <ul className="list-disc">
            {section.items?.map((item, i) => (
                <li key={i} className="text-base md:text-xl">
                    {item}
                </li>
            ))}
        </ul>
        </>        
    );
}

export const Table05a = ({section}) => {

    return (
       
        <>

            <ul key={'p001'+section.key} className="hidden md:block text-xl md:text-xl mx-8 flex flex-col border border-slate-400 rounded-md gap-y-0 " >

            {section.items?.map((item, i) => (
                <li key={'p002'+section.key+i} className="">
                     

                        <div key={'p003'+section.key+i}>
                   
                            {
                                {
                                    "heading01": <Column01a key={'p004'+section.key+i} item={item.columns} index={i} />,
                                    "heading02": <Column02a key={'p005'+section.key+i} item={item.columns} index={i} />,
                                    "button"   : <Column03a key={'p006'+section.key+i} item={item.columns} index={i} />,
                                    "list"     : <Column04a key={'p007'+section.key+i} item={item.columns} index={i} />
                                }[item.type]
                            }

                        </div>    
                        
                    
                </li>

            ))}    
            </ul>

        </>        
    );
}


export const Table06a = ({section}) => {

    return (
        <>

            {section.items?.map((item, i) => (

            <ul key={'p001'+section.key+i} className="block md:hidden" >

                <div key={'p013'+section.key+i} className="text-xl md:text-xl flex flex-col border border-slate-400 rounded-md gap-y-0 ">

                <li key={'p002'+section.key+i} className="">
                    
                    <h3 key={'p003'+section.key+i} className="border border-slate-400 px-5 rounded-md py-2 font-semibold" >
                        {item.h01}
                    </h3>

                </li>

                <li key={'p004'+section.key+i} className="">
                    
                    <h3 key={'p005'+section.key+i} className="border border-slate-400 px-5 rounded-md py-2 font-semibold" >
                        {item.h02}
                    </h3>

                </li>

                <li key={'p006'+section.key+i} className="">

                    <div key={'p007'+section.key+i} className="border border-slate-400 px-5 rounded-md py-2" >

                        <Link 
                            key={'p008'+section.key+i}
                            href={`${item.src}`} 
                            className="">
                            <h3 key={'p009'+section.key+i} className="w-24 inline-flex outline-4 cursor-pointer justify-center py-3 border border-transparent shadow text-base text-xl md:text-xl rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> 
                                {item.button}
                            </h3>
                        </Link>

                    </div>

                </li>

                <li>

                    <div key={'p010'+section.key+i} className="border border-slate-400 px-5 rounded-md py-2" >

                        <ul key={'p011'+section.key+i} className="list-disc" >

                        {item.list?.map((element, ind) => (
                            <li key={'p012'+section.key+i+ind}  className="mx-5">
                                {element}
                            </li>
                        ))}    

                        </ul>

                   </div>

                </li>

                </div>

                <br></br>

            </ul>

            ))}    
    
        </>        
    );
}


const Column04a = ({item, index}) => {

    return (
            <>

            <ul key={'t201'+index}  className="list-disc break-words text-xl md:text-xl">



            <div key={'t202'+index} className="grid md:grid-cols-4 border-1 border-slate-400 rounded-md">


             <div key={'t210'+index} className="md:col-span-1 border border-slate-400 px-5 rounded-md py-2" >
                {item.a01?.map((element, i) => (
                    <li key={'t204'+index+i}  className="mx-5">
                        {element}
                    </li>
                ))}    
             </div>
             <div key={'t211'+index} className="md:col-span-1 border border-slate-400 px-5 rounded-md py-2" >
                {item.a02?.map((element, i) => (
                    <li key={'t205'+index+i} className="mx-5">
                        {element}
                    </li>
                ))}    
             </div>
             <div key={'t212'+index} className="md:col-span-1 border border-slate-400 px-5 rounded-md py-2" >
                {item.a03?.map((element, i) => (
                    <li key={'t206'+index+i} className="mx-5">
                        {element}
                    </li>
                ))}    
             </div>
             <div key={'t213'+index} className="md:col-span-1 border border-slate-400 px-5 rounded-md py-2" >
                {item.a04?.map((element, i) => (
                    <li key={'t207'+index+i} className="mx-5">
                        {element}
                    </li>
                ))}    
             </div>

            </div>

            </ul>
            </>
    );
}

const Column01a = ({item, index}) => {

    return (
            <>
            <div key={'s106'+index} className="grid md:grid-cols-4 border-1 border-slate-400 rounded-md break-words font-semibold text-xl md:text-xl">
    
             <div key={'s107'+index} className="md:col-span-1 border border-slate-400 px-5 rounded-md py-2" >
                {item.a01}
             </div>
             <div key={'s108'+index} className="md:col-span-1 border border-slate-400 px-5 rounded-md py-2" >
                {item.a02}
             </div>
             <div key={'s109'+index} className="md:col-span-1 border border-slate-400 px-5 rounded-md py-2" >
                {item.a03}
             </div>
             <div key={'s110'+index} className="md:col-span-1 border border-slate-400 px-5 rounded-md py-2" >
                {item.a04}
             </div>
             </div>
            </>
    );
}

const Column02a = ({item, index}) => {

    return (
            <>
            <div key={'k106'+index} className="grid md:grid-cols-4 border-1 border-slate-400 rounded-md break-words font-semibold text-xl md:text-xl">
    
             <div key={'k107'+index} className="md:col-span-1 border border-slate-400 px-5 rounded-md py-2" >
                {item.a01}
             </div>
             <div key={'k108'+index} className="md:col-span-1 border border-slate-400 px-5 rounded-md py-2" >
                {item.a02}
             </div>
             <div key={'k109'+index} className="md:col-span-1 border border-slate-400 px-5 rounded-md py-2" >
                {item.a03}
             </div>
             <div key={'k110'+index} className="md:col-span-1 border border-slate-400 px-5 rounded-md py-2" >
                {item.a04}
             </div>
             </div>
            </>
    );
}

const Column03a = ({item, index}) => {

    return (
            <>
            <div key={'m106'+index} className="grid md:grid-cols-4 border-1 border-slate-400 rounded-md break-words text-xl md:text-xl">
    
             <div key={'m107'+index} className="md:col-span-1 border border-slate-400 px-5 rounded-md py-2" >
                <Link 
                    key={'m108'+index}
                    href={`${item.b01}`} 
                    className="">
                    <h3 className="w-24 inline-flex outline-4 cursor-pointer justify-center py-3  border border-transparent shadow text-base text-xl md:text-xl rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> 
                        {item.a01}
                    </h3>
                </Link>
             </div>
             <div key={'m109'+index} className="md:col-span-1 border border-slate-400 px-5 rounded-md py-2" >
                <Link 
                    key={'m110'+index}
                    href={`${item.b02}`} 
                    className="">
                    <h3 className="w-24 inline-flex outline-4 cursor-pointer justify-center py-3 border border-transparent shadow text-base text-xl md:text-xl rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> 
                        {item.a02}
                    </h3>
                </Link>
             </div>
             <div key={'m111'+index} className="md:col-span-1 border border-slate-400 px-5 rounded-md py-2" >
                <Link 
                    key={'m112'+index}
                    href={`${item.b03}`} 
                    className="">
                    <h3 className="w-24 inline-flex outline-4 cursor-pointer justify-center py-3  border border-transparent shadow text-base text-xl md:text-xl rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> 
                        {item.a03}
                    </h3>
                </Link>
             </div>
             <div key={'m113'+index} className="md:col-span-1 border border-slate-400 px-5 rounded-md py-2" >
                <Link 
                    key={'m114'+index}
                    href={`${item.b04}`} 
                    className="">
                    <h3 className="w-24 inline-flex outline-4 cursor-pointer justify-center py-3  border border-transparent shadow text-base text-xl md:text-xl rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> 
                        {item.a04}
                    </h3>
                </Link>
             </div>
             </div>
            </>
    );
}