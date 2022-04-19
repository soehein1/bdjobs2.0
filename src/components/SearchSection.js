import React from 'react'
import '../static/css/SearchSection.css'
import { AiFillForward } from 'react-icons/ai'

export default function SearchSection() {
    return (
        <section className='search-section'>
            <div className='search-bar'>
                <h1>Find The Right Job</h1>
                <div className='search-box'>
                    <input />
                    <button>Search</button>
                </div>

            </div>
            <div className='side-bar'>
                <h3>DIVISIONAL JOBS</h3>
                <div className='division-list'>
                    <a href="search">Dhaka</a>
                    <a href="search">Barishal</a>
                    <a href="search">Kulna</a>
                    <a href="search">Sylhet</a>
                    <a href="search">Chattogram</a>
                    <a href="search">Rajshahi</a>
                    <a href="search">Rangpur</a>
                    <a href="search">Mymensingh</a>
                </div>
                <div className='quick-links'>
                    <h3>Quick Links</h3>
                    <div className='links'>
                        <a href='search'><AiFillForward />Employer List</a>
                        <a href='search'><AiFillForward /> Deadline Tomorrow</a>
                        <a href='search'><AiFillForward />Part time Jobs</a>
                        <a href='search'><AiFillForward />Work From Home</a>
                        <a href='search'><AiFillForward />New Jobs(24 hrs)</a>
                        <a href='search'><AiFillForward />Contractual Jobs</a>
                        <a href='search'><AiFillForward />Overseas Jobs</a>

                    </div>

                </div>
            </div>
        </section>
    )
}
