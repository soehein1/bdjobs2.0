import React from 'react'
import Category from './Category'
import '../static/css/Categories.css'
import { BiCategoryAlt } from 'react-icons/bi'
import getData from '../mockDB/categoryList'
export default function Categories() {
    const list = getData()
    return (
        <section className='categories-section'>
            <div className='categories-header'>
                <div className='title'><BiCategoryAlt />Job Categories</div>
                <div className='buttons'>
                    <button className='btn'>functional</button>
                    <button className='btn'>Industrial</button>
                </div>
            </div>
            <div className='categories-list'>
                {
                    list.map((data) => {
                        return <Category title={data.name} />
                    })
                }
            </div>
        </section>
    )
}
