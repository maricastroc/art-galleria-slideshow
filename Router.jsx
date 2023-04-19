import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './src/layouts/DefaultLayout'
import { Home } from './src/pages/Home'
import { Artist } from './src/pages/Artist'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/artist/:data" element={<Artist />} />
      </Route>
    </Routes>
  )
}
