'use client';

import React, {useState} from 'react'
import SearchManufacturer from './SearchManufacturer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchButton = ({otherClasses}: {otherClasses:string}) => (
  <button 
   className={`-ml-3 z-10 ${otherClasses}`}
   type='submit'
  >
    <Image 
     className='object-contain'
     src='/magnifying-glass.svg' 
     alt='magnifying_glass'
     width={40}
     height={40}/>
  </button>
)

function SearchBar() {

  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('')
  const router = useRouter();


  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();

    if(manufacturer === '' && model === '') {
      return alert('Please fill the searchbar')
    }

    updateSearchParams(model, manufacturer);
  }

  const updateSearchParams = (model: string, manufacturer: string) =>{ 
    const searchParams = new URLSearchParams(window.location.search);

    if(model) {
      searchParams.set('model', model);
    }else {
      searchParams.delete('model');
    }

    if(manufacturer) {
      searchParams.set('manufacturer', manufacturer);
    }else {
      searchParams.delete('manufacturer');
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathname);
  }

  return (
    <form 
     className='searchbar'
     onSubmit={(e) => handleSearch(e)}
    >
      <div className='searchbar__item'>
        <SearchManufacturer
         manufacturer ={manufacturer}
         setManufacturer ={setManufacturer}
        />
        
      </div>
      <div className='searchbar__item'>
        <Image 
         className='absolute w-[20px] h-[20px] ml-4'
         src='/model-icon.png'
         alt='model_icon'
         width={25}
         height={25}
        />
        <input 
         className='searchbar__input'
         type="text" 
         name='model'
         value={model}
         onChange={(e) => setModel(e.target.value)}
         placeholder='Tiguan'/>
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-md:hidden' />
    </form>
  )
}

export default SearchBar