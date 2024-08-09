import React, { useState } from 'react'
import '../Styles/ProdFilt.css'
import {NavLink} from 'react-router-dom'
import FeatureProdComp from './FeatureProdComp';
import PopularProd from './PopularProd';
import TrendingProd from './TrendingProd';

const ProdFilterComp = () => {
    const [filter , setFilter] = useState('featured');
    
  return (
    <>

    <section className="prod-filter-comp">
        <div className="common-container">

        <div className="categ-flex-bx comn-heading mb-5">
            <p>A curated collection of our best selling items</p>
            <h6> <span>Best</span>  Sellers</h6>
          </div>

            <div className="prod-filter-flex-main-bx">

                <div className="left-prod-filt-btns-flex">

                    <button className={ filter === 'featured' ? "prod-filt-btn prodfiltbtnactive" : "prod-filt-btn"} onClick={() => setFilter('featured')}>
                        Featured
                    </button>

                    <button className={ filter === 'popular' ? "prod-filt-btn prodfiltbtnactive" : "prod-filt-btn"} onClick={() => setFilter('popular')}>
                        Popular
                    </button>

                    <button className={ filter === 'trending' ? "prod-filt-btn prodfiltbtnactive" : "prod-filt-btn"} onClick={() => setFilter('trending')}>
                        Trending
                    </button>
                    
                </div>



                <div className="view-more-btn">
                 <NavLink t0="#">   View More </NavLink>
                </div>
                
            </div>


            <div className="products-main-box">

               {filter === 'featured' ? <FeatureProdComp  /> : null}
               {filter === 'popular' ? <PopularProd  /> : null}
               {filter === 'trending' ? <TrendingProd  /> : null}


                
            </div>
            
        </div>
    </section>
      
    </>
  )
}

export default ProdFilterComp
