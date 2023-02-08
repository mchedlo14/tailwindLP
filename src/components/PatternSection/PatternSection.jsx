import React from 'react'
import sectionImage from '../../assets/image.png'
const PatternSection = () => {
  return (
    <div className='max-w-5xl min-h-[28.125rem] mx-auto mt-20 flex items-center gap-x-[20px] gap-y-[30px] flex-wrap justify-center'>
        <div className='flex flex-col gap-y-4 w-[27rem] h-[17.125rem'>
            <h2 className='text-color-[#080808] text-[80px] font-normal leading-[72px]'>Pattern for your design</h2>
            <p className='pt-[8px] leading-[19px]'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <button className='w-[6.25rem] h-[40px] text-white bg-navbtnbg mt-[20px]'>See More</button>
        </div>

        <div className='w-[480px] h-[450px]'>
            <img src={sectionImage} />
        </div>
    </div>
  )
}

export default PatternSection