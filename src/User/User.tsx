import { useEffect, useState } from 'react';
import React from "react"
const User:React.FC<any> = (props)=>{
 const [name,setName] = useState<string>("php");
  const [age,setAge] = useState<number>(0);
  const[isError,setIsError] = useState<any>({status:false,msg:''});

  const checkError = (msg = "default msg")=>{
    alert(msg);
  }
  useEffect(()=>{
if (!isError.status && name ==="php") {
    checkError();
}else if (isError.status){
    checkError(isError.msg)
}
},[isError])
  const login = ()=>{
    if (name==='php') {
        setIsError({status:true,msg:"name cannot be php"})
        return;
    }else if (name ==='java') {
        setIsError({status:true,msg:"name cannot be java"})
     return;
    }
  }
  console.log(name,age);
return(
    <div>
<h1>User Component</h1>
   {props.children}
  Name: <input type="text" value ={name} onChange={e=>setName(e.target.value)} /><br />
   Age: <input type="number" value ={age} onChange={e=>setAge(parseInt(e.target.value))} /><br />
   <button onClick={login}>Save</button>
    </div>
)
}
export default User;