import React from 'react'
import '../index.css';


function list() {
    return (
        <section>
            <ul className='flex'>
                <li><a className='cursor-pointer hover:text-white text-slate-200 font-sans text-base px-3'>Home</a></li>
                <li><a className='cursor-pointer hover:text-white text-slate-200 font-sans text-base px-3'>About Me</a></li>
                <li><a className='cursor-pointer hover:text-white text-slate-200 font-sans text-base px-3'>Portfolio</a></li>
                <li><a className='cursor-pointer hover:text-white text-slate-200 font-sans text-base px-3'>Contact</a></li>
            </ul>
        </section>
    )
}

export default list