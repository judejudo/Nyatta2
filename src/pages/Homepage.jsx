import React from 'react'
import OpeningScreen from '../components/OpeningScreen'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'

export default function Homepage() {
  return (
    <>   
        <OpeningScreen/>
        <BookingForm/>
        <Card/>
    </>

  )
}
