
const getItem = (key) => {
  const value = localStorage.getItem(key);
  if(value!==null){
    return JSON.parse(value)
  }
  return value;
}

const setItem = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}


export default {
  getItem,
  setItem
};
