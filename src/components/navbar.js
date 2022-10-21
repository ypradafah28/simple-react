import React from 'react'
import List from './list'

function navbar() {
    return (
        <div className='px-32 py-5 bg-sky-500 flex justify-between items-center'>
            <h1>Logo</h1>
            <List />
        </div>
    )
}

export default navbar

