import { FaSearch } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom'; // Add the missing closing brace and semicolon

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Sahand</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
          <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type='text'placeholder='search...' className='bg-transparent focus:outline-none'/>
            <FaSearch className='text-slate-600'/>
          </form>
        </Link>
      </div>
    </header>
  );
}


