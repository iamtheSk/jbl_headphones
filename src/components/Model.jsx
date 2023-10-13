import React from 'react'


//icons
import {RiPlayCircleFill} from 'react-icons/ri'


//images
import modelImg from './assets/img/model-img.png'
import modelPriceRight from './assets/img/tooltip-right.svg'
import sponserImg1 from './assets/img/sponsor-1.png'
import sponserImg2 from './assets/img/sponsor-2.png'
import sponserImg3 from './assets/img/sponsor-3.png'
import sponserImg4 from './assets/img/sponsor-4.png'




const Model = () => {
  return (
    <>
         <section className="model section" id="model">
            <h2 className="section__title">
                MODEL SPECIFICATIONS
            </h2>

            <div className="model__container container grid">
                <div className="model__content">
                    <img src={modelImg} alt="Image" className="model__img"/>

                    <div className="model__tooltip model__tooltip-1">
                        <img src={modelPriceRight} alt="ModelImage1" className="model__tooltip-img"/>
                        <span className="model__tooltip-text">Best Comfort</span>
                    </div>

                    <div className="model__tooltip model__tooltip-2">
                        <img src={modelPriceRight} alt="ModelImage2" className="model__tooltip-img"/>
                        <span className="model__tooltip-text">Easy Adjustment</span>
                    </div>

                    <div className="model__tooltip model__tooltip-3">
                        <img src={modelPriceRight} alt="ModelImage3" className="model__tooltip-img"/>
                        <span className="model__tooltip-text">Fast Charge</span>
                    </div>

                    <div className="model__tooltip model__tooltip-4">
                        <img src={modelPriceRight} alt="ModelImage4" className="model__tooltip-img"/>
                        <span className="model__tooltip-text">Custom Audio</span>
                    </div>
                </div>

                <a href="#" className="model__button button">
                    Buy Now <RiPlayCircleFill className='i'/>
                </a>

            </div>
        </section>


        {/* <!-- =============== SPONSER ======================= --> */}

        <section class="sponser section">
            <div class="sponser__container container grid">
                <img src={sponserImg1} alt="image" class="sponser__img" />
                <img src={sponserImg2} alt="image" class="sponser__img" />
                <img src={sponserImg3} alt="image" class="sponser__img" />
                <img src={sponserImg4} alt="image" class="sponser__img" />
            </div>
        </section>

    </>
  )
}

export default Model