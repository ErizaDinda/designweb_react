import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './style/Contact.css'

const Contact = () => {
    return (
        <div className='contact'>

            {/* <Link to='/' className='a-icon'><ArrowBack className='icon'/></Link> */}
        
            <div className="input__container">
            <h1>Hubungi Kami</h1>
            <br></br>
                <input type="text" placeholder='Nama Lengkap'/>
                <input type="number" placeholder='Nomor Handphone' />
                <input type="email" placeholder='Email'/>
                <textarea type="text" placeholder='Pesan Singkat'></textarea>

                <button>Kirim</button>

            </div>

        </div>
    )
}

export default Contact