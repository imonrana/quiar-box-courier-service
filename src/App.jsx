
import './App.css'
import Banner from './component/Banner/Banner'
import CallBackFrom from './component/CallBackFrom/CallBackFrom'
import FactCounter from './component/FactCounter/FactCounter'
import FindUs from './component/FindUs/FindUs'
import ModalVideo from './component/ModalVideo/ModalVideo'
import Navbar from './component/Navbar/Navbar'
import Services from './component/Services/Services'
import Testimonial from './component/Testimonial/Testimonial'
import Footer from './component/Footer/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <Banner/>
    <Services/>
    <FactCounter/>
    <ModalVideo/>
    <Testimonial/>
    <CallBackFrom/>
    <FindUs/>
    <Footer/>
    </>
  )
}

export default App
