import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import SlideShowContext from '../../contexts/SlideShowContext'
import { useState } from 'react'

export function DefaultLayout() {
  const [open, setOpen] = useState(false)
  return (
    <SlideShowContext.Provider value={{ open, setOpen }}>
      <Header />
      <Outlet />
      <Footer />
    </SlideShowContext.Provider>
  )
}
