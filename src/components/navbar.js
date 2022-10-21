import React from 'react'
import List from './list'

function navbar() {
    const navbar = {
        home:'Home',
        about:'About Me',
        portfolio:'Portfolio',
    }
    return (
        <div className='px-32 py-5 bg-sky-500 flex justify-between items-center'>
            <h1>Logo</h1>
            <List  list1 = {navbar.home} list2 = {navbar.about} list3 = {navbar.portfolio}/>
        </div>
    )
}

export default navbar

