import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'

const Room= () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='ROOM' text='Foto dan Pemesanan' />
            <Footer />
        </div>
    )
}

export default Room