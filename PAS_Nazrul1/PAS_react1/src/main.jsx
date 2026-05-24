import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Keranjang from './KeranjangKu/keranjang'

import './style/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Keranjang />
  </StrictMode>,
)
