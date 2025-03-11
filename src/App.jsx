import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RoadmapPage from './pages/RoadmapPage'
import BuyPage from './pages/BuyPage'
import JoinPage from './pages/JoinPage'
import ReviewsPage from './pages/ReviewsPage'
import DocsPage from './pages/DocsPage'
import NotFound from './pages/NotFound'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/roadmap' element={<RoadmapPage/>}/>
      <Route path='/buy' element={<BuyPage/>}/>
      <Route path='/join' element={<JoinPage/>}/>
      <Route path='/reviews' element={<ReviewsPage/>}/>
      <Route path='/docs' element={<DocsPage/>}/>
      <Route path='/notfound' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
