
import Link from 'next/link';
import React, { useEffect, useContext } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { getError } from '@/utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { LangContext } from "@/components/Context"

export const LoginScreen = ({section}) => {

    const { data: session } = useSession();

    const router = useRouter();
    const { redirect } = router.query;
    const {lang} = useContext(LangContext);
  
    useEffect(() => {
      if (session?.user) {
        router.push(redirect || '/');
      }
    }, [router, session, redirect]);
  
    const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm();
    const submitHandler = async ({ email, password }) => {
      try {
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password,
        });
        if (result.error) {
          toast.error(result.error);
        }
      } catch (err) {
        toast.error(getError(err));
      }
    };

    const column = section.columns

  return (

    <>
    <div key="f301" className="grid md:grid-cols-3">
    <div key="f302" className='md:col-span-2'>
    <div key="f001" className="py-10 bg-gray-50 px-4 sm:px-6 min-h-min w-full flex justify-center items-center">
        <div key="f002" className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
            <h1 className='text-2xl flex justify-center  items-center underline font-semibold'>{column.title}</h1>
            <br></br>

    <form
    className="grid grid-cols-1 gap-y-8"
    onSubmit={handleSubmit(submitHandler)}
  >
    <div key="f003" >
      <label htmlFor="email">{column.email_01}</label>
      <input
        type="email"
        {...register('email', {
          required: 'Please enter email',
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
            message: 'Please enter valid email',
          },
        })}
        className={`block w-full shadow-md px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 
                   ${ errors.email ? 'ring-2 ring-blue-300' : null }`}
        id="email"
        placeholder={column.email_02}
      ></input>
      {errors.email && (
        <div className="text-red-500">{errors.email.message}</div>
      )}
    </div>
    <div key="f004" >
      <label htmlFor="password">{column.password_01}</label>
      <input
        type="password"
        {...register('password', {
          required: 'Please enter password',
          minLength: {value: 6, message: 'at leat 8 digits' },
        })}
        className={`block w-full shadow-md px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 
                    ${ errors.password ? 'ring-2 ring-blue-300' : null }`}
        id="password"
        placeholder={column.password_02}
      ></input>
      {errors.password && (
        <div key="f005" className="text-red-500 ">{errors.password.message}</div>
      )}
    </div>
    <div key="f006">
      <button key="f007" className="inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">{column.title}</button>
    </div>
    <div key="f008" >
      {column.notRegister}
      <Link 
      href={`/accounting/users-register/1204-${lang}?redirect=${redirect || '/'}`}>
      <div
      key="f009"
      className="inline-flex justify-center py-1 px-6 mx-4 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-600 cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
         {column.reg}
      </div>
      </Link>
    </div>
  </form>

  </div>
    </div>
    </div>
    <div key="f303" className='md:col-span-1'></div>
    </div>
    </>
  
  )
}

