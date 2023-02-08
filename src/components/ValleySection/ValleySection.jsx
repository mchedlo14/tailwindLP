import React from 'react'
import image from '../../assets/image2.png'
const ValleySection = () => {
  return (
    <div className='max-w-5xl mx-auto min-h-[28.125rem] mt-[140px] flex flex-wrap justify-center gap-[30px]'>
        <div className='w-[440px] min-h-[318px] '>
            <p className='text-textColor text-[50px]'>Valley of Colors</p>
            <img src={image} />
        </div>
        <div className='w-[440px] min-h-[318px] '>
            <p className='text-textColor text-[14px]'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <div className='mt-[32px]  min-h-[318px] w-[440px] flex flex-col'>
                <h2 className='pl-[60px] pt-[40px] text-textColor font-bold'>Heading</h2>
                <p className='pl-[60px] pt-[12px] text-textColor'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <p className='font-bold pl-[60px] pt-[54px] text-2xl'>30$</p>
                <button className='bg-navbtnbg w-[115px] h-[40px] mt-[14px] ml-[60px] text-white text-[14px]'>Add to card</button>
            </div>
        </div>
    </div>
  )
}

export default ValleySection