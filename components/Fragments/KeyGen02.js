
import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import { LangContext } from "@/components/Context"

export const KeyGen02a = ({section, downloads}) => {

    const { status, data: session } = useSession();
    const {lang} = useContext(LangContext);

    let userMail, userName, os, osVer, langver, noBits = ''

    const [serial, setSerial] = useState();
    const [comment, setComment] = useState();
    const [words, setWords] = useState();
    const [ver, setVer] = useState();
    const [nosys, setNosys] = useState(true)

    if (status !== 'loading') {
      if ( session?.user ) {
      userMail=session.user.email
      userName=session.user.name
    }}

    const dictionary_01 = {
      'zh' : '简体中文',
      'zh-CN' : '简体中文',
      'zh-CHS' : '简体中文',
      'zh-HK' : '繁體中文',
      'zh-MO' : '繁體中文',
      'zh-SG' : '繁體中文',
      'zh-TW' : '繁體中文'
    }

    const dictionary_02 = {
      "Windows 10" : "Windows 10",
      "Windows 8" : "Windows 10",
      "Windows 7" : "Windows 7"
    }

    const dictionary_03 = {
      "64 bits OS" : "64 bits",
      "Not a 64 bits OS" : "32 bits"
    }

    const dictionary_06 = {
      '繁體中文' : '繁體中文',
      'undefined' : 'English',
      '简体中文' : '简体中文'
    }

    const dictionary_07 = {
      'Windows 10' : 10,
      'Windows 8' : 10,
      'Windows 7' : 10,
      'Windows Vista' : 0,
      'Windows XP' : 0,
      'Windows 2000' : 0,
      'Mac/iOS' : 0,
      'UNIX' : 0,
      'Linux' : 0,
    }

    const dictionary_08 = {
      'Windows' : 6,
      'Mac OS' : 0,
      'iOS' : 0,
      'Android' : 0,
      'Linux' : 0
    }
    

    let _windows, _languages, _bits = "";
    
    useEffect(()=>{
      os = getOS();
      osVer = OSversion();
      langver = LangVersion();
      noBits = checkBits();
      setSerial(StrAlpha());
      setVer(os+" :- "+osVer+", "+langver+", "+noBits);
      _languages = dictionary_01[langver] ;
      _windows = dictionary_02[osVer] ;
      _bits = dictionary_03[noBits] ;
      if( dictionary_08[os] < 5 || dictionary_07[osVer] < 6 ) {
        setComment(section.failure);
        setWords("null");
      } else {
        setNosys(false);
        setWords(_windows +"--" + _bits + "<>" +_languages);
        setComment(section.success+_windows +", " + dictionary_06[_languages] + ", " +_bits);
      }
    },[])


    const table = "gigaserials"
    const file01 = 'https://www.kenneth-system.net/annex/@.php'+'?serial='+encodeURIComponent(serial)+'&name='+encodeURIComponent(userName)+'&email='+encodeURIComponent(userMail)+'&table='+encodeURIComponent(table)+'&lang='+encodeURIComponent(lang)

    const userDetails = [userName,userMail,ver,comment];
    const allWords = downloads.filter((mu) => mu.words === words) ;

    if (!nosys) {
      sendData(allWords[0].form,userName,userMail,serial,"gigaserials");
    }

    const aWords = allWords[0]?.src;
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
                    <div key={'f101'+section.key+i}   className = {` col-span-3 md:col-span-5 border border-slate-400 px-5 rounded-md py-2  ${ i===noItems ? 'block' : 'hidden'}  ${ nosys ? 'block' : 'hidden'}  `} >
                        
                    </div>
                    <div key={'f008'+section.key+i}   className = {` col-span-3 md:col-span-5 border border-slate-400 px-5 rounded-md py-2   ${ i===noItems ? 'block' : 'hidden'}  ${ nosys ? 'hidden' : 'block'}  `}>
                      {aWords?.map((source, i) => (

                      <Link 
                        key={'f009'+section.key+i} 
                        href= {`${file01.replace('@',source[0])}`}
                        className="">
                        <h3 
                          key={'f010'+section.key+i}  
                          className="w-36 inline-flex outline-4 cursor-pointer justify-center py-3 mr-5 my-1 border border-transparent shadow text-base text-xl md:text-xl rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> 
                          {`${source[1]}`}   
                        </h3>
                      </Link>

                      ))}    
                    </div>
                </div>
            </li>
        ))}    
        </ul>
        </>        
    );
}

dynamic(() => Promise.resolve(KeyGen02a),{ssr:false});

function getOS() {

    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  }

  function OSversion() {

    var OSName = "Unknown";
    if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
    if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
    if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
    if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
    if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";

    return OSName

  }

  function LangVersion() {
    const version = Intl.DateTimeFormat().resolvedOptions().locale
    return version;
  }

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
 
 function checkBits() {
    let bits = '';
    if (navigator.userAgent.indexOf("WOW64") != -1 || 
       navigator.userAgent.indexOf("Win64") != -1 ){
       bits = "64 bits OS";
    } else {
       bits = "Not a 64 bits OS"
    }
    return bits;
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
