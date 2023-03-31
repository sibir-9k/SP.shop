import { Routes, Route } from "react-router-dom";
import { CardList } from './components/CardList/CardList'
import { Header } from './components/Header/Header'
import { LayoutCard } from './components/LayoutCard/LayoutCard.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/product" element={<LayoutCard />} />
      </Routes>
    </div>
  )
}

export default App


