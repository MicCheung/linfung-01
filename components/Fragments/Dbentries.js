
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { LangContext } from "@/components/Context"

import axios from 'axios';
import React, { useEffect, useReducer, useContext } from 'react';
import { getError } from '@/utils/error';

function reducer(state, action) {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true, error: '' };
      case 'FETCH_SUCCESS':
        return { ...state, loading: false, orders: action.payload, error: '' };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
}

export const Dbentries01 = ({section}) => {

    const { status, data: session } = useSession();
    const {lang} = useContext(LangContext);

    const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
        loading: true,
        orders: [],
        error: '',
    });
    
    useEffect(() => {
        const fetchOrders = async () => {
          try {
            dispatch({ type: 'FETCH_REQUEST' });
            const { data } = await axios.get(`/api/enquiries`);
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
          } catch (err) {
            dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
          }
        };
        fetchOrders();
    }, []);  

    var url = [];

    orders?.map((ap) => {

      const file = 'https://www.kenneth-system.net/wr0x/writemail_01.php'+
               '?name='+encodeURIComponent(ap.name)+
               '&coname='+encodeURIComponent(ap.coName)+
               '&email='+encodeURIComponent(ap.email)+
               '&comment='+encodeURIComponent(ap.comment)+
               '&lang='+encodeURIComponent(lang)  

      url.push(file);         

    })
    
    return (

        <>

        {status === 'loading' ? ( 'Loading' ) : session?.user?.isAdmin && 

        <>
          
        {loading ? (

            <div>Loading...</div>
            ) : error ? (
            <div className="alert-error">{error}</div>
            ) : (
    
            orders?.map((ap,i) => (

            <div key={'s001'+section.key+i} className="card">

                <div key={'s002'+section.key+i} className="flex flex-col justify-center p-5 break-words px-5 bg-gray-50 border-gray-300 rounded-md shadow-md">


                  <Link href={`${url[i]}`}>
                    <a>
                      <h3 key={'s003'+section.key+i} className="font-black text-2xl cursor-pointer">
                        {ap.name}
                      </h3>
                    </a>
                  </Link>

                  <p key={'s004'+section.key+i}>{ap.coName}</p>
                  <p key={'s005'+section.key+i}>{ap.email}</p>
                  <p key={'s006'+section.key+i}>{ap.comment}</p>
                  <p key={'s007'+section.key+i}>{ap.updatedAt}</p>
      
                </div>
    
            </div>

        )))}

        </>

        }

        </>

    );
}

export const Dbentries02 = ({section}) => {

  const { status, data: session } = useSession();

  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
      loading: true,
      orders: [],
      error: '',
  });
  
  useEffect(() => {
      const fetchOrders = async () => {
        try {
          dispatch({ type: 'FETCH_REQUEST' });
          const { data } = await axios.get(`/api/users`);
          dispatch({ type: 'FETCH_SUCCESS', payload: data });
        } catch (err) {
          dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
        }
      };
      fetchOrders();
  }, []);  

  return (

      <>

      {status === 'loading' ? ( 'Loading' ) : session?.user?.isAdmin && 

      <>
        
      {loading ? (

          <div>Loading...</div>
          ) : error ? (
          <div className="alert-error">{error}</div>
          ) : (
  
          orders?.map((ap,i) => (

          <div key={'s001'+section.key+i} className="card">

              <div key={'s002'+section.key+i} className="flex flex-col justify-center p-5 break-words px-5 bg-gray-50 border-gray-300 rounded-md shadow-md">
               
                  <h3 key={'s103'+section.key+i} className="font-black text-xl">{ap.name}</h3>
                  <p key={'s105'+section.key+i}>{ap.email}</p>
                  <p key={'s107'+section.key+i}>{ap.updatedAt}</p>
    
              </div>
  
          </div>

      )))}

      </>

      }

      </>

  );
}

