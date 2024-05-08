import React, { useEffect, useState } from 'react';

import './App.css';
import { resolve } from 'path';

function App() {

  const[title,setTitle] = useState('no change');
  const userApi = ()=>{
return new Promise <any>((resolve,reject)=>{
  return setTimeout(()=>{
    resolve({name:'nikita'})
  },1000)
})
  }
  const getUserData=async() =>{
const userData = await userApi();
console.log('userData',userData);
const {name} = userData;
setTitle(name);
  }
  useEffect(()=>{
getUserData();

  },[]);
  return (
  <div>
    use Effect{title}
  
  </div>
  );
}

export default App;
