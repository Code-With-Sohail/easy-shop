import Home from "./Home.jsx"
import { Routes, Route } from "react-router-dom"
import Detailcard from "./Detailcard.jsx"
import "./index.css"
import Shopdetailcard from "./Shopdetailcard.jsx"
import OtherElectronic from "./OtherElectronic.jsx"
import OtherElectronicDetailCards from "./OtherElectronicDetailCards.jsx"
import OtherWomenClothes from "./OtherWomenClothes.jsx"
import OtherWomenClothesDetailCards from "./OtherWomenClothesDetailCards.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailcard/:id" element={<Detailcard />} />
        <Route path="/Shopdetailcard/:id" element={<Shopdetailcard/>}/>
        <Route path="/Electronic_items" element={<OtherElectronic/>}/>
        <Route path="/ElectronicDetailCard/:id" element={<OtherElectronicDetailCards/>}/>
        <Route path="/Women_clothes" element={<OtherWomenClothes/>}/>
        <Route path="/OtherWomenClothes/:id" element={<OtherWomenClothesDetailCards/>}/>
      </Routes>
    </>
  )
}

export default App