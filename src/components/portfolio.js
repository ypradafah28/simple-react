import React from 'react'

import Button from './button'
import Judul from './heading'


function Portfolio() {

    const button = "More Info"
    const judul = "Portfolio"
    return (
        <div>
            <Judul judul={judul} />
            <section>

                <figure className='flex justify-center py-5'>
                    <img src='/porto.png' alt='porto' />
                </figure>
                <section className='ml-[8.5rem] py-2 pb-3'>
                    <a href='/#' className='underline text-rose-400 font-semibold'>Lorem ipsum</a>
                </section>
                <section className='ml-[8.5rem]'>

                    <Button button={button} />
                </section>
            </section>
            <section className='py-28'>
                <figure className='flex justify-center py-5'>
                    <img src='/porto.png' alt='porto' />
                </figure>
                <section className='ml-[8.5rem] py-2 pb-3'>
                    <a href='/#' className='underline text-rose-400 font-semibold'>Lorem ipsum</a>
                </section>
                <section className='ml-[8.5rem]'>
                    <Button button={button} />
                </section>
            </section>
        </div>
    )
}

export default Portfolio
