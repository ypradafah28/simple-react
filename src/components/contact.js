import React from 'react'
import Judul from './heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

function Contact() {
    const kontak = "Contact Me"
    return (
        <div className='py-5 flex items-center justify-between'>
            <section className='ml-40'>
                <section className='flex justify-start pb-10 tracking-wider'>
                    <Judul judul={kontak} />
                </section>
                <section className='tracking-wide'>
                    <section className='flex items-center'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p className='py-2 mx-5'>Jl. Surabaya No 45</p>
                    </section>
                    <section className='flex items-center'>
                        <FontAwesomeIcon icon={faFacebook} />

                        <p className='py-2 mx-5'>
                            Nelly Saunders
                        </p>
                    </section>
                    <section className='flex items-center'>
                        <FontAwesomeIcon icon={faTwitter} />
                        <p className='py-2 mx-5'>
                            Nelly Saunders
                        </p>
                    </section>

                    <section className='flex items-center'>
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <p className='py-2 mx-5'>
                            Nelly Saunders
                        </p>
                    </section>
                </section>
            </section>
            <section className='mr-10 mt-20'>
                <form className='flex'>
                    <input type="text" className='mx-1 ml-3 h-12 px-3 w-60 py-2 rounded-sm focus:ring-rose-400 focus:ring-2 outline-none' placeholder='Name' />
                    <input type="email" className='mx-1 px-3 w-56 rounded-sm focus:ring-rose-400 focus:ring-2 outline-none' placeholder="Email" />
                </form>
                <form className='flex flex-col'>
                    <input type="textarea" className="my-3 mx-3 px-2 py-2 rounded-sm h-32 w-[29.5rem] focus:ring-rose-400 focus:ring-2 outline-none" placeholder='Your Message' />

                    <a className='bg-rose-500 rounded-sm w-[13.25rem] text-center py-4 px-10 ml-[17rem] text-slate-300 hover:text-white hover:bg-rose-600 duration-300 delay-300' href='/#'>Send Message</a>
                </form>
            </section>
        </div>
    )
}

export default Contact
