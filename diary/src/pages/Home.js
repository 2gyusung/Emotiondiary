import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from '../components/Button';


function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams.get("sort"));
  
  return (
    <div>
      <Button 
      text={"기본 버튼"}
      onClick={()=> {
        alert("hi")
      }}
      />
      <Button 
      type="positive"
      text={"긍정 버튼"}
      onClick={()=> {
        alert("positive")
      }}
      />
      <Button 
      type="negative"
      text={"부정 버튼"}
      onClick={()=> {
        alert("negative")
      }}
      />
    </div>
  )
}

export default Home
