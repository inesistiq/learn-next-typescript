import { NextPage } from 'next'
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button } from '../component/Button/Button';
import { Input } from '../component/Input/Input';


interface Account {
    username: string;
    password: string;
}

const Login: NextPage = () => {

    const router = useRouter()
    const [user, setUser] = useState<Partial<Account>>({});

    const onSubmit = () => {
        if(user?.username === 'admin' && user?.password === 'admin'){
            router.push('/todos')
        }
    }

    return (
        <div className="w-full p-36 bg-blue-500 h-screen">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <Input classes="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" 
                    value={user?.username}
                    onChange={e => setUser({...user, username: e.currentTarget.value })}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <Input classes="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="password"
                      value={user?.password}
                      onChange={e => setUser({...user, password: e.currentTarget.value})}
                    />
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <Button classes="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={onSubmit}>
                        Sign In
                    </Button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
        
        </div>
    )
}

export default Login;