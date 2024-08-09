import React from 'react'
import DealsDayComp from './DealsDayComp';

const Targetcomp = () => {
    const targetDate = new Date('2023-01-01T00:00:00');

  return (
    <>
       <div>
      <h1>Countdown Timer</h1>
      <DealsDayComp targetDate={targetDate} />
    </div>
    </>
  )
}

export default Targetcomp
