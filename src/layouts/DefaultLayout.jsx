import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import SlideShowContext from '../../contexts/SlideShowContext'
import { useState } from 'react'

export function DefaultLayout() {
  const [open, setOpen] = useState(false)
  return (
    <SlideShowContext.Provider value={{ open, setOpen }}>
      <Header />
      <Outlet />
    </SlideShowContext.Provider>
  )
}
