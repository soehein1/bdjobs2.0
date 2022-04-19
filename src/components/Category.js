import React from 'react'
import {AiFillCaretRight} from 'react-icons/ai'
import "../static/css/Category.css"
export default function Category(props) {
  return (
    <div className='category'>
        
        <a href='search'><AiFillCaretRight/>{props.title}</a>
        </div>
  )
}
