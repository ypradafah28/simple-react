import React from 'react'
import Name from './name'
import Paragraph from './paragraph'
import Button from './button'

function Hero() {
    const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    const button = "More Info"
    return (
        <div className='bg-yellow-300 flex justify-between items-center px-24 py-12'>
            <section className='px-5'>
                <Name />
                <Paragraph teks={text} />
                <Button button={button} />
            </section>
            <figure>
                <img className='translate ease-in-out duration-700 delay-300 hover:-translatey-y-2 hover:scale-110' src='/profile.png' width={650}  alt='logo profil'/>
            </figure>
            <figure className='absolute z-10 left-52 top-20 w-[52rem] translate ease-in-out duration-300 delay-150 hover:-translate-y-3'>
                <img src='/grup.png' alt='bg' />
            </figure>
        </div>
    )
}

export default Hero
