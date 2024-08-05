"use client"
import { signup } from "@/app/actions/user";
import axios from "axios"
import { useState } from "react"

export function SignupComponent() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
    <div className="">
        <div className="">
            <input type="text" placeholder="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            onChange={(e) => {
                setEmail(e.target.value);
            }}>
            </input>
            <br></br>
            <input type="text" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            onChange={(e) => {
                setPassword(e.target.value);
            }}>
            </input>
            <br></br>
            <button type="button" className="mt-8 text-white 
            bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium 
                rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                onClick={() => {
                    // axios.post("http://localhost:3000/api/user",{
                    //     email,
                    //     password
                    // })
                    signup(email, password); // server actions
                }}>
                Sign up
            </button>
        </div>
    </div>
    )
}