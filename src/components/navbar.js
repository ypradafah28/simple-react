import React from 'react'
import List from './list'

function navbar() {
    const navbar = {
        home:'Home',
        about:'About Me',
        portfolio:'Portfolio',
        contact :'Contact'
    }
    return (
        <div className='px-32 py-5 bg-yellow-300 flex justify-between items-center'>
            <figure>
                <img className='cursor-pointer ' src='/logo.png'/>
            </figure>
            <List  list1 = {navbar.home} list2 = {navbar.about} list3 = {navbar.portfolio} list4 ={navbar.contact}/>
        </div>
    )
}

export default navbar

