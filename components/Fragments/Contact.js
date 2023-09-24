
import { useRef } from "react";
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";
import { useSession } from 'next-auth/react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

export const ContactF_01 = ({section}) => {

  const { status, data: session } = useSession();  
  const column = section.columns

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  let userMail = ''

  if (status !== 'loading') {
  if ( session?.user ) {
  userMail=session.user.email
  }}

  const recaptchaRef = useRef();

  const onSubmitWithReCAPTCHA = async ({ name, coName, email, comment }) => {

    const token = await recaptchaRef.current.executeAsync();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        coName,
        email,
        comment,
        token,
      }),
    });

    const data = await response.json();

    if (data.errors) {
      console.log(data.errors);
    } else {
      console.log("success, redirect to home page");
      console.log(data);
      reset();
      notify(name);
    }

  }   

  const notify = (name) => { toast('🦄'+" "+column.hello+" "+name+", "+column.reply,{
    position: "bottom-center",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    }) }

  const display = ({data}) => {
    console.log(data);
  }  

  return (
    <>
    <div key="f301" className="grid md:grid-cols-3">
    <div key="f302" className='md:col-span-2'>
    <div key="f001" className="py-10 bg-gray-50 px-4 sm:px-6 min-h-min w-full flex justify-center items-center">
        <div key="f002" className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
            <p className='text-2xl flex justify-center  items-center underline font-semibold'>{column.title}</p>
            <br></br>
            <form  className="grid grid-cols-1 gap-y-8" onSubmit={handleSubmit(onSubmitWithReCAPTCHA)}>
                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    size="invisible"
                    ref={recaptchaRef}
                />
                <div key="f003" >
                    <label htmlFor="name">
                        {column.name_01}
                    </label>
                    <input
                        type="text"
                        name="name"
                            {...register('name', { required: 'You must enter your name' })}
                        className={`block w-full shadow-md py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                            errors.name ? 'ring-2 ring-blue-300' : null
                            }`}
                        placeholder={column.name_02}
                    />
                    <span key="f004" className="text-blue-500 ">
                        {errors?.name?.message}
                    </span>
                </div>

                <div key="f201" >
                    <label htmlFor="coName">
                        {column.company_01}
                    </label>
                    <input
                        type="text"
                        name="coName"
                            {...register('coName', { required: 'Please  enter your Company Name' })}
                        className={`block w-full shadow-md py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                            errors.name ? 'ring-2 ring-blue-300' : null
                        }`}
                        placeholder={column.company_02}
                    />
                    <span key="f202" className="text-blue-500 ">
                        {errors?.coName?.message}
                    </span>
                </div>

                <div key="f005" >
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
                        defaultValue={userMail}
                    >
                    </input>
                    {errors.email && (
                        <div className="text-blue-500">{errors.email.message}
                        </div>
                    )}
                </div>

                <div key="f008">
                    <label htmlFor="comment" >
                    {column.message_01}
                    </label>
                    <textarea
                        type="text"
                        name="comment"
                        rows="4"       
                        {...register('comment', {
                            required: 'Please leave your message',
                            minLength: { value: 20, message: 'at least 20 characters' },
                        })}
                        className="block w-full shadow-md pb-6 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"  
                        placeholder={column.message_02}>
                    </textarea>
                        {errors.comment && (
                            <div className="text-blue-500">{errors.comment.message}</div>
                        )}
                </div>

                <div key="f009">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        {column.submit}
                    </button>
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

