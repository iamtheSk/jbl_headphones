import React from 'react'

//icon
import {RiArrowUpSLine} from 'react-icons/ri'

const ScrollUp = () => {


    const scrollup = ()=>{
        const scrollUp = document.getElementById('scroll-up')
        //when the scroll is higher that 350 viewport height , then add the scroll visible
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll')
    }
        window.addEventListener('scroll', scrollup)


  return (
        <>
    {/* <!-- ===============SCROLL UP ==================== --> */}
        <a href="" class="scrollup" id="scroll-up">
          <RiArrowUpSLine />
        </a>
    </>

  )
}

export default ScrollUp