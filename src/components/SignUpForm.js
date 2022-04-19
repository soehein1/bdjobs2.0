import React from 'react'
import Select from 'react-select'
import "../static/css/SignUpForm.css"


const options = [
    {value:"male" , label:'male'},
    {value:"female",label:"female"},
    {value:"other",label:"other"}
]
export default function SignUpForm() {
  return (
    <div>
        <h1>Create Account</h1>
        <form>
            <div className='input'>
                <label className='label'>Name</label>
                <input className='input-box'/>
            </div>
            <div className='input'>
                <label className='label'>Gender</label>
                <select className='slect-box'>
                    <option value = "0">Gender</option>
                    <option value = "1">Male</option>
                    <option value = "2">Female</option>
                    <option value = "3">Other</option>
                </select>
            </div>
        </form>
    </div>
  )
}
