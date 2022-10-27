import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faCode, faLaptop, faPencil } from "@fortawesome/free-solid-svg-icons"
import Teksskill from './teksskill'
import Button from './button'
function Skill() {
    const namaSkill1 = "UX Research"
    const deskripsiSkill1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "


    const namaSkill2 = "Front End Development"
    const deskripsiSkill2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "


    const namaSkill3 = "UI Designer"
    const deskripsiSkill3 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "


    const namaSkill4 = "Graphic Designer"
    const deskripsiSkill4 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "

    const kontak = "Contact Me"

    return (
        <div className='py-10'>
            <section className='flex justify-center gap-10 my-10'>
                <section className='bg-green-200 px-5 py-2 w-[34rem] h-60 drop-shadow-xl rounded-md'>
                    <figure className='py-2 pb-10'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-rose-400 w-20 h-20" />
                    </figure>
                    <Teksskill namaSkill={namaSkill1} />
                    <Teksskill teksSkill={deskripsiSkill1} />
                </section>
                <section className='bg-green-200 px-5 py-2 w-[34rem] h-60 drop-shadow-xl rounded-md'>
                    <figure className='py-2 pb-10'>
                        <FontAwesomeIcon icon={faCode} className="text-rose-400 w-20 h-20" />
                    </figure>
                    <Teksskill namaSkill={namaSkill2} />
                    <Teksskill teksSkill={deskripsiSkill2} />
                </section>
            </section>
            <section className='flex justify-center gap-10 my-10'>
                <section className='bg-green-200 px-5 py-2 w-[34rem] h-60 drop-shadow-xl rounded-md'>
                    <figure className='py-2 pb-10'>
                        <FontAwesomeIcon icon={faLaptop} className="text-rose-400 w-20 h-20" />
                    </figure>
                    <Teksskill namaSkill={namaSkill3} />
                    <Teksskill teksSkill={deskripsiSkill3} />
                </section>
                <section className='bg-green-200 px-5 py-2 w-[34rem] h-60 drop-shadow-xl rounded-md'>
                    <figure className='py-2 pb-10'>
                        <FontAwesomeIcon icon={faPencil} className="text-rose-400 w-20 h-20" />
                    </figure>

                    <Teksskill namaSkill={namaSkill4} />
                    <Teksskill teksSkill={deskripsiSkill4} />
                </section>
            </section>
            <section className='flex justify-center'>
                <Button button={kontak} />
            </section>
        </div>
    )
}

export default Skill
