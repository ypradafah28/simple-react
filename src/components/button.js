import React from 'react'

function Button(props) {
    return (
        <div className='py-3'>   
            <a href="/#" className='cursor-pointer rounded-sm px-5 py-2 text-slate-200 bg-rose-500 hover:bg-rose-600'>{props.button}</a>
        </div>
    )
}

export default Button
