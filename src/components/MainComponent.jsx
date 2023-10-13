import React from 'react'


//icons
import {RiCloseLine} from 'react-icons/ri'
import {RiMenuLine} from 'react-icons/ri'
import {RiInstagramFill} from 'react-icons/ri'
import {RiFacebookCircleFill} from 'react-icons/ri'
import {RiYoutubeFill} from 'react-icons/ri'
import {RiPlayCircleFill} from 'react-icons/ri'
import {RiInformationFill} from 'react-icons/ri';
import {RiSendPlaneFill} from 'react-icons/ri'


//images
import MainHImage from './assets/img/home-img.png'
import MainPriceLine from './assets/img/tooltip-right.svg'
import Aboutimg from './assets/img/about-img.png'
import favorite1 from './assets/img/favorite-1.png'
import favorite2 from './assets/img/favorite-2.png'
import favorite3 from './assets/img/favorite-3.png'
import favorite4 from './assets/img/favorite-4.png'
import modelImg from './assets/img/model-img.png'
import modelPriceRight from './assets/img/tooltip-right.svg'
import sponserImg1 from './assets/img/sponsor-1.png'
import sponserImg2 from './assets/img/sponsor-2.png'
import sponserImg3 from './assets/img/sponsor-3.png'
import sponserImg4 from './assets/img/sponsor-4.png'


// Components
import Header from './Header'
import Sections from './Sections'
import Model from './Model'
import Footer from './Footer'




const MainComponent = () => {

return (
    <div>

        {/* <!-- part 1 ========== HEADER ============================= --> */}
        <Header />

        {/* Part 2 <!--================ MAIN ==========================  --> */}
        <Sections />

        {/* part 3 <!-- =============== MODEL ======================= --> */}
        <Model />

        {/* <!-- =============== FOOTER ======================= --> */}
        <Footer />
    </div>
  )
}

export default MainComponent