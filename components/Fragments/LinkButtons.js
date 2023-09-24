
import Link from 'next/link';


import {
    GoDesktopDownload
  } from "react-icons/go";  
  
  import {
    GiHummingbird
  } from "react-icons/gi";  

  import {
    GrInstallOption
  } from "react-icons/gr";  
  
  import {
    TiBusinessCard
  } from "react-icons/ti";  

  import {
    MdVideoLibrary
  } from "react-icons/md";  
  


export const Link01a = ({section}) => {

    return (
        <>
        <Link key={section.key} href={`${section.src}`} >              
            <h3 key={section.key} className="text-xl md:text-2xl font-semibold cursor-pointer px-5 underline underline-offset-4 ">
                {section.content}
            </h3>
        </Link>
        <br></br>
        </>
    );
}


export const Link02a = ({section}) => {

    return (
        <>
        <div key={"c001"+section.key} className="flex flex-row px-5">
            <div key={"c003"+section.key} className=" text-2xl  py-1  ">
                {
                    {
                        0: <GoDesktopDownload />,
                        1: <GiHummingbird />,
                        2: <TiBusinessCard />,
                        3: <GrInstallOption />
                    }[section.logo]
                }
            </div>
            <div key={"c002"+section.key} > 
                <Link key={section.key} href={`${section.src}`} >              
                    <h3 key={section.key} className="text-xl md:text-2xl font-semibold cursor-pointer px-4 underline underline-offset-4 ">
                        {section.content}
                    </h3>
                </Link>
            </div>
        </div>        
        <br></br>
        </>
    );
}

export const Link03a = ({section}) => {

    return (
        <>
        <Link key={section.key} href={`${section.src}`} >              
            <h3 key={section.key} className="text-xl md:text-2xl font-semibold cursor-pointer px-5 underline underline-offset-4 ">
                {section.content}
            </h3>
        </Link>
        </>
    );
}

export const Link04a = ({section}) => {

    return (
        <>
        <div key={"c001"+section.key} className="flex flex-row px-5">
            <div key={"c003"+section.key} className=" text-2xl  py-1  ">
                {
                    {
                        0: <GoDesktopDownload />,
                        1: <GiHummingbird />,
                        2: <TiBusinessCard />,
                        3: <GrInstallOption />
                    }[section.logo]
                }
            </div>
            <div key={"c002"+section.key} > 
                <Link key={section.key} href={`${section.src}`} >              
                    <h3 key={section.key} className="text-xl md:text-2xl font-semibold cursor-pointer px-4 underline underline-offset-4 ">
                        {section.content}
                    </h3>
                </Link>
            </div>
        </div>        
        </>
    );
}

export const Link05a = ({section}) => {

    return (
        <>
        <h2 key={'b001'+section.key} className="text-xl md:text-xl underline underline-offset-4 px-5 ">
            <div key={'b002'+section.key} className=" p-2 mt-2 ">
                {section.content}
            </div>
        </h2>   
        <ul key={'b003'+section.key} className="list-disc">
            {section.items?.map((item, i) => (
                <li key={'b004'+section.key+i} className=" py-1">
                    
                    <div key={'b005'+section.key+i}  className={`text-xl md:text-xl flex flex-wrap break-words  ${item.split ? 'block' : 'hidden'}`}>
                        <div key={'b006'+section.key+i}  >
                            {item.content}
                        </div>
                        <div key={'b007'+section.key+i}  className="pl-4 mt-1" >
                            {
                                {
                                    0: <GoDesktopDownload />,
                                    1: <GiHummingbird />,
                                    2: <TiBusinessCard />,
                                    3: <GrInstallOption />,
                                    4: <MdVideoLibrary />
                                }[item.logo]
                            }
                        </div>
                        <div key={'b008'+section.key+i}  > 
                            <Link key={'b009'+section.key+i}  href={`${item.src}`} >              
                                <h3 key={'b010'+section.key+i}  className="text-xl md:text-xl cursor-pointer px-4 underline underline-offset-4 italic">
                                    {item.linking}
                                </h3>
                            </Link>
                        </div>
                    </div> 

                    <div key={'b011'+section.key+i}  className={`text-xl md:text-xl ${item.split ? 'hidden' : 'block'}`}>
                        {item.content}
                    </div>  

                </li>
                
            ))}
        </ul>
        </>        
    );
}
