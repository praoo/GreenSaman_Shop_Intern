import React, { useEffect, useState } from 'react'
import '../Styles/DealDay.css'

const DealsDayComp = () => {
    
    const [days , setDays] = useState(0);
    const [hours , setHours] = useState(0);
    const [mins , setMins] = useState(0);
    const [sec , setSec] = useState(0);

    const deadline =  "January, 27, 2024" ;

    const getTime =  () => {

        const time  = Date.parse(deadline) - Date.now() ;

        setDays(Math.floor(time/(1000*60*60*24))) ;
        setHours(Math.floor(time/(1000*60*60)%24)) ;
        setMins(Math.floor((time/1000/60)%60)) ;
        setSec(Math.floor((time/1000)%60)) ;


        // console.log(days);
        
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getTime()

            return () => clearInterval(interval) ;
        }, 1000);
    },[])
    
  return (
    <>

    <section className="dea-day-comp">
        <div className="common-container">

            <div className="deal-day-grid grid grid-two-col">

                <div className="deal-day-bx">
                    <div className="deal-day-info-bx">
                        <h3>Deal of the Day</h3>
                        <p>Limited quantities.</p>

                        <h5>Summer Collection New Morden Design</h5>

                        <div className="deal-day-price-flex">

                            <span>₹570.00</span>

                            <span>₹890.00</span>
                            
                        </div>


                        <div className="count-down-bx-main">
                        <p>Hurry Up! Offer End In:</p>
                        <div className="count-down-num-flex-bx">

                            <div className="count-down-bx">
                                <div className="cnt-num-bx">
                                    <span> {days<10 ? "0"+days : days} </span>
                                </div>
                                <p>Days</p>
                            </div>

                            <div className="count-down-bx">
                                <div className="cnt-num-bx">
                                <span> {hours<10 ? "0"+hours : hours} </span>
                                </div>
                                <p>hours</p>
                            </div>

                            <div className="count-down-bx">
                                <div className="cnt-num-bx">
                                <span> {mins<10 ? "0"+mins : mins} </span>

                                </div>
                                <p>Mins</p>
                            </div>

                            <div className="count-down-bx">
                                <div className="cnt-num-bx">
                                <span> {sec<10 ? "0"+sec : sec} </span>

                                </div>
                                <p>Sec</p>
                            </div>
                            
                        </div>

                        <button className="learn-more-btn shop-bg-btn">
                Shop Now
                <i class="fa-solid fa-arrow-right-long"></i> 
            </button>
                        
                        </div>
                        
                    </div>
                </div>
                
                <div className="deal-day-bx deal-day-bx2">
                    <div className="deal-day-info-bx">
                        <h3>Men Clothing</h3>
                        <p>Shirt & Bag.</p>

                        <h5>Summer Collection New Morden Design</h5>

                        <div className="deal-day-price-flex">

                            <span>₹320.00</span>

                            <span>₹480.00</span>
                            
                        </div>


                        <div className="count-down-bx-main">
                        <p>Hurry Up! Offer End In:</p>
                        <div className="count-down-num-flex-bx">

                            <div className="count-down-bx">
                                <div className="cnt-num-bx">
                                    <span> {days<10 ? "0"+days : days} </span>
                                </div>
                                <p>Days</p>
                            </div>

                            <div className="count-down-bx">
                                <div className="cnt-num-bx">
                                <span> {hours<10 ? "0"+hours : hours} </span>
                                </div>
                                <p>hours</p>
                            </div>

                            <div className="count-down-bx">
                                <div className="cnt-num-bx">
                                <span> {mins<10 ? "0"+mins : mins} </span>

                                </div>
                                <p>Mins</p>
                            </div>

                            <div className="count-down-bx">
                                <div className="cnt-num-bx">
                                <span> {sec<10 ? "0"+sec : sec} </span>

                                </div>
                                <p>Sec</p>
                            </div>
                            
                        </div>

                        <button className="learn-more-btn shop-bg-btn">
                Shop Now
                <i class="fa-solid fa-arrow-right-long"></i> 
            </button>
                        
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    </section>
      
    </>
  )
}

export default DealsDayComp
