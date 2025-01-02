import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

    const [currentState, setCurrentState] = useState('Login');
    const {token, setToken, navigate, backendUrl} = useContext(ShopContext);

    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if(currentState === 'Sign Up'){
                
                const response = await axios.post(backendUrl + '/api/user/register',{name,email,password})
                if(response.data.success){
                    setToken(response.data.token)
                    localStorage.setItem('token',response.data.token)
                }else{
                    toast.error(response.data.message)
                }

            }else{
        
                const response = await axios.post(backendUrl + '/api/user/login', {email,password})
                if(response.data.success){
                    setToken(response.data.token)
                    localStorage.setItem('token',response.data.token)
                }else{
                    toast.error(response.data.message)
                }

            }
            
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            
        }
    }
    
    useEffect(()=>{
        if(token){
            navigate('/')
        }
    },[token])


    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-newsletter'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}</p>
                <hr className=' border-none h-[1.5px] w-8 bg-newsletter' />
            </div>
            {currentState === 'Login' ? null : <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full px-3 py-2 border border-gray-800' type="text" placeholder='Name' required />}
            <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full px-3 py-2 border border-gray-800' type="email" placeholder='Email' required />
            <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full px-3 py-2 border border-gray-800' type="password" placeholder='Password' required />
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer'>Forgot your password?</p>
                {
                    currentState === 'Login'
                        ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
                        : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login here</p>
                }
            </div>
            <button type='submit' className='bg-color text-background font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign in' : 'Sign up'}</button>
        </form>
    )
}

export default Login