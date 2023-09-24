
import { useEffect, useState, useContext } from 'react';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { LangContext } from "@/components/Context"

export const KeyGen03a = ({section}) => {

    const { status, data: session } = useSession();
    const {lang} = useContext(LangContext);

    let userMail, userName = ''

    const [serial, setSerial] = useState();

    if (status !== 'loading') {
      if ( session?.user ) {
      userMail=session.user.email
      userName=session.user.name
    }}

    useEffect(()=>{
     
      setSerial(StrAlpha());
     
    },[])


    const table = "gisuserials"
    const file01 = 'https://www.kenneth-system.net/annex/@.php'+'?serial='+encodeURIComponent(serial)+'&name='+encodeURIComponent(userName)+'&email='+encodeURIComponent(userMail)+'&table='+encodeURIComponent(table)+'&lang='+encodeURIComponent(lang)

    const userDetails = [userName,userMail];
    const formid = "2200"

    sendData(formid,userName,userMail,serial,"gisuserials");

    const noItems = section.items.length - 1;

    return (
        <>
        <h2 key={'f001'+section.key} className="text-xl md:text-xl ">
            <div key={'f002'+section.key}  className=" p-5 ">
                {section.content}
            </div>
        </h2>   
        <ul key={'f003'+section.key}  className="list-none">
            {section.items?.map((item, i) => (
            <li key={'f004'+section.key+i}  className="text-base md:text-xl md:mx-5 break-words">
                <div key={'f005'+section.key+i}  className="grid grid-cols-5 md:grid-cols-7 border-1 border-slate-400 rounded-md">
                    <div key={'f006'+section.key+i}   className="col-span-2 md:col-span-2 border border-slate-400 px-5 rounded-md py-2" >
                        {item}
                    </div>
                    <div key={'f007'+section.key+i}   className = {` col-span-3 md:col-span-5 border border-slate-400 px-5 rounded-md py-2  ${ i===noItems ? 'hidden' : 'block'}  `} >
                        {userDetails[i]}
                    </div>
    
                    <div key={'f008'+section.key+i}   className = {` col-span-3 md:col-span-5 border border-slate-400 px-5 rounded-md py-2   ${ i===noItems ? 'block' : 'hidden'} `}>
                  
                      <Link 
                        key={'f009'+section.key+i} 
                        href= {`${file01.replace('@','singleuser')}`}
                        className=""> 
                        <h3 
                          key={'f010'+section.key+i}  
                          className="w-36 inline-flex outline-4 cursor-pointer justify-center py-3 mr-5 my-1 border border-transparent shadow text-base text-xl md:text-xl rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> 
                          {section.button}   
                        </h3>
                      </Link>

                    </div>
                </div>
            </li>
        ))}    
        </ul>
        </>        
    );
}

dynamic(() => Promise.resolve(KeyGen03a),{ssr:false});

  function StrAlpha() {
    const hyphen = "-" 
    const Number = getAlphabets();
    let strnum = Number.substring(0,5) + hyphen + Number.substring(5,10) + hyphen + Number.substring(10,15) + hyphen + Number.substring(15,20) + hyphen + Number.substring(20,25);
    return strnum;
 } 

 function getAlphabets() {
    let num = '';
    const alpha = '0123456789ABCDEFGHJKMNPQRSTUVWXYZ'
    for (var i = 0; i < 30; i++) {
        let x = Math.floor(Math.random()*33)
        num = num + alpha.substring(x,x+1)  
    }
    return num;
 }

 function sendData(id,name,email,serial,table) {

    var url = 'https://www.kenneth-system.net/annex/writetime_01.php';
    let form = {
        "formid" : "2100",
        "name" : "cheung",
        "email"  : "jason.jason@gmail.com",
        "serial" : "12345-67890",
        "table" : "gigaserials"
    }
    form = {...form,"formid" : id}
    form = {...form,"name" : name}
    form = {...form,"email" : email}
    form = {...form,"serial" : serial}
    form = {...form,"table" : table}
    fetch(url, {
        "method" : "POST",
        "mode" : "no-cors", 
        "header" : {
             "Content-Type": "application/json",
             "Authorization": "kenneth" },
        "body" : JSON.stringify(form)     
    }) .then( res => res )
       .then( data => console.log(data) );

}
 

