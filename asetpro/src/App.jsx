import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import KatalogAset from './pages/KatalogAset'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/katalog-aset" element={<KatalogAset />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App