import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Rooms from '../components/Rooms'

const Room= () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='ROOM' text='Foto dan Pemesanan' />
            <Rooms />
            <Footer />
        </div>
    )
}

export default Room