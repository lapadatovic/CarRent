'use client';
import React,{Fragment,useState} from 'react'
import { CustomFilterProps } from '../../types'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox, Transition } from '@headlessui/react';


function CustomFilter( {title, options}:CustomFilterProps ) {
  const [selected, setSelected] = useState();
  console.log(options);
  return (
    <div className='w-fit'>
      <Listbox 
       value={selected}
       onChange={(e) => setSelected(e)}
      >
        <div className='relative w-fit z-10'>
          <Listbox.Button className='custom-filter__btn'>
            <span>{selected}</span>
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter