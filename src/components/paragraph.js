import React from 'react'

function Paragraph(props) {

    return (
        <div className='py-2'>
            <p className= "pr-10 text-sm font-sans font-normal">{props.teks}</p>
        </div>
    )
}

export default Paragraph
