import React from 'react'
import List from './list'

function ListTujuan() {
    const jawa = {
        jawaTimur: "Surabaya",
        jawaBarat: "Bandung",
        jakarta: "Jakarta"
    }
    return (
        <div>
            <List list1 = {jawa.jawaTimur}/>
        </div>
    )
}

export default ListTujuan