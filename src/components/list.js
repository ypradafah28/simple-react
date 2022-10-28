import React from 'react'
import '../index.css';

function list(props) {
    
    return (
        <section>
            <ul className='flex'>
                <li><a href="/#" className='cursor-pointer hover:text-black text-slate-700 font-sans text-base px-3'>{props.list1}</a></li>
                <li><a href="/#" className='cursor-pointer hover:text-black text-slate-700 font-sans text-base px-3'>{props.list2}</a></li>
                <li><a href="/#" className='cursor-pointer hover:text-black text-slate-700 font-sans text-base px-3'>{props.list3}</a></li>
                <li><a href="/#" className='cursor-pointer hover:text-black text-slate-700 font-sans text-base px-3'>{props.list4}</a></li>
            </ul>
        </section>
    )
}

export default list