import React from 'react'

function Teksskill(props) {
    return (
        <div>
            <h3 className='text-xl font-sans font-bold'>{props.namaSkill}</h3>
            <p className='text-sm font-sans font-normal py-1 pr-10'>{props.teksSkill}</p>
        </div>
    )
}

export default Teksskill
