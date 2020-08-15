import Cache from '../utils/Cache';
import htmlParser from "./HTMLParser";

const fetchPreview = async (queryUrl) => {

  const cachedVal = Cache.getItem(queryUrl);
  if(cachedVal){
    return cachedVal;
  }

   const url = `https://cors-anywhere.herokuapp.com/${queryUrl}`;


   const response = await fetch(url, {
     method: 'GET',
   });

   if(response.ok){
     const text = await response.text();
     const data = htmlParser.parse(text, queryUrl);
     Cache.setItem(queryUrl, data);
     return data;
   } else {
     const status = `${response.status} ${response.statusText}`;
     throw new Error(`Error while fetching preview information: ${status} for "${queryUrl}"`);
   }

};

export default fetchPreview;
