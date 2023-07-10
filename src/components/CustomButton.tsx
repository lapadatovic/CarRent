"use client";
import React from 'react'
import Image from 'next/image';
import { CustomButtonProps } from '../../types';

const CustomButton = ({title, containerStyle, handleClick, btnType, rightIcon, textStyles}: CustomButtonProps) => {
  return (
    <button 
     type={btnType || 'button'}
     className={`custom-btn ${containerStyle}`}
     disabled={false}
     onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title} 
        </span>
        {rightIcon && (
          <div className='relative w-6 h-6 '>
            <Image 
             className='object-contain'
             src={rightIcon}
             alt='right_icon'
             fill/>
          </div>
        )}
    </button>
  )
}

export default CustomButton