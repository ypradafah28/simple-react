import React from 'react'
import Judul from './heading'
import Teks from './teks'

function Aboutme() {
    const judul = "About Me"
    return (
        <div>
            <Judul judul = {judul} />
            <Teks />
        </div>
    )
}

export default Aboutme
