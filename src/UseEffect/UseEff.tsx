import React, { useEffect, useState } from 'react';

import './App.css';
import { resolve } from 'path';

function UseEff() {

  const[title,setTitle] = useState('no change');
  const[isLoading,setIsLoading] = useState<boolean>(false)
  const[isError,setIsError] = useState<boolean>(false)
  const userApi = ()=>{
return new Promise <any>((resolve,reject)=>{
  return setTimeout(()=>{
    resolve({name:'nikita'})
  },1000)
})
  }
  const getUserData=async() =>{
    console.log("hii");
const userData = await userApi();
console.log("helloooo");
console.log('userData',userData);
const {name} = userData;
setTitle(name);
  }
  useEffect(()=>{
    if (isLoading) {
      console.log("isLoading",isLoading);
    }
    if (isError) {
      console.log("isError",isError);
    }


  },[isLoading,isError]);

  useEffect(()=>{
  getUserData();
  },[]);
  const changeLoadingState = ()=>{
    const loadingState = ! isLoading;
    setIsLoading(loadingState);
  }
  const changeErrorState = ()=>{
    const isErrorNew = !isError;
    setIsError(isErrorNew);
  }

  return (
  <div>
    use Effect{title}

    <br/>
    {isLoading ? "isLoading" : "Loaded"}
    <br/>
    {isError?"...there is an error" : "no Error"}
    <br/>
    <button onClick={changeLoadingState}>Change Loading</button>
    <button onClick={changeErrorState}>Change Error</button>
  
  </div>
  );
}

export default UseEff;
