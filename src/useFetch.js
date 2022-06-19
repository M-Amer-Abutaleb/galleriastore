import React, { useEffect, useState, useCallback } from 'react'
import { useGlobalContext } from './context';

const mainURL = 'https://api.unsplash.com/photos/';
const searchURL = 'https://api.unsplash.com/search/photos/';
const ClientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

const useFetch = (userInput, page) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
	
  
  let urlPage = `&page=${page}`;
  let urlQuery = `&query=${userInput}`;

  const getPhotos = useCallback(async (...Arguments) => {
    setIsLoading(true);
    try {
      let response;
      if (userInput.length > 2) {
				response = await fetch(searchURL + ClientID + urlPage + urlQuery);
				const data = await response.json();
				setData(data.results);
			} else {
				response = await fetch(mainURL + ClientID + urlPage);
				const data = await response.json();
				setData(data);
			}
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(true)
    }
  }, [userInput, page]);
 
  useEffect(() => {
		if (!isLoading) {
			if (userInput.length > 2) {
				getPhotos(userInput);
			} else {
				getPhotos();
			}
			setIsLoading(true);
		}
	}, [userInput.length > 2, page]);
 
  return {data}
}

export default useFetch