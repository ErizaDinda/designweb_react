import React from 'react'
import Header from './Header'
// import image
import telkom from './assets/tulungagung-icon.png'
// import css untuk Section 
import './style/Section.css' 

const Section = () => {
    return (
        <section className='section'>
            <Header/>

            <div className="section__box">
                <div className="section__content">
                    <h1 className='content__header'>Kabupaten Tulungagung</h1>
                    <p>Tulungagung adalah salah satu kabupaten yang terletak di Provinsi 
                        Jawa Timur, Indonesia. Pusat pemerintahan Kabupaten Tulungagung berada di Kecamatan Tulungagung.
                        Tulungagung terkenal sebagai satu dari beberapa daerah penghasil marmer terbesar di Indonesia, dan
                         terletak 154 km barat daya Kota Surabaya, ibu kota Provinsi Jawa Timur..</p>
                    {/* <p className='small__p'>Reach Yor Future</p> */}

                </div>

                <div className="section__img">
                    <img src={telkom} alt="" />
                </div>
            </div>

        </section>
    )
}

export default Section