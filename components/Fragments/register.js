
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { getError } from '@/utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import axios from 'axios';


export const RegisterScreen = ({section}) => {

  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });

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
  const column = section.columns;

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
        <div key="f003" className="mb-4">
          <label htmlFor="name">{column.name_01}</label>
          <input
            type="text"
            className={`block w-full shadow-md py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
              errors.name ? 'ring-2 ring-blue-300' : null
              }`}
            id="name"
            placeholder={column.name_02}
            {...register('name', {
              required: 'Please enter name',
            })}
          />
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
        </div>

        <div key="f004" className="mb-4">
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
            className={`block w-full shadow-md py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
              errors.email ? 'ring-2 ring-blue-300' : null
              }`}
            id="email"
            placeholder={column.email_02}
          ></input>
          {errors.email && (
            <div key="f005" className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div key="f006" className="mb-4">
          <label htmlFor="password">{column.password_01}</label>
          <input
            type="password"
            {...register('password', {
              required: 'Please enter password',
              minLength: { value: 6, message: 'password is more than 5 chars' },
            })}
            className={`block w-full shadow-md py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
              errors.password ? 'ring-2 ring-blue-300' : null
              }`}
            id="password"
            placeholder={column.password_02}
          ></input>
          {errors.password && (
            <div key="f007" className="text-red-500 ">{errors.password.message}</div>
          )}
        </div>
        <div key="f008" className="mb-4">
          <label htmlFor="confirmPassword">{column.password_11}</label>
          <input
            className={`block w-full shadow-md py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
              errors.confirmPassword ? 'ring-2 ring-blue-300' : null
              }`}
            type="password"
            id="confirmPassword"
            placeholder={column.password_12}
            {...register('confirmPassword', {
              required: 'Please enter confirm password',
              validate: (value) => value === getValues('password'),
              minLength: {
                value: 6,
                message: 'confirm password is more than 5 chars',
              },
            })}
          />
          {errors.confirmPassword && (
            <div key="f009" className="text-red-500 ">
              {errors.confirmPassword.message}
            </div>
          )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === 'validate' && (
              <div className="text-red-500 ">Password do not match</div>
            )}
        </div>

        <div key="f010" className="mb-4 ">
          <button 
          className="inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >{column.title}</button>
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

