import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { useGlobalContext } from '../context';

const Search = () => {
  const { userInput, setUserInput } = useGlobalContext();
  const submitHandler = (e) => {
    e.preventDefault();
    
  }

  return (
      <form >
        <input  type='text' placeholder='Search' value={userInput} onChange={(e)=>setUserInput(e.target.value)} />
        <button onClick={submitHandler} type="submit" >
          <BsSearch />
        </button>
      </form>
  )
}

export default Search