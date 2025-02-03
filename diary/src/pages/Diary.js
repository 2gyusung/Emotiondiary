import React from 'react'
import { useParams } from 'react-router-dom'

const  Diary = () => {
  const {id} = useParams();
  return (
    <div>
      <div>{id}번일기</div>
      diary입니다
    </div>
  )
}

export default Diary
