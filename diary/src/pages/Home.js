import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from '../component/Button';
import Header from '../component/Header';
import Editor from './Editor';
import Diary from './Diary';
import { DiaryStateContext } from '../App';
import { getMonthRangeByDate } from '../util';
import DiaryList from '../component/DiaryList';



function Home() {
    
  const data = useContext(DiaryStateContext);
  const [searchParams, setSearchParams] = useSearchParams()
  const [pivotDate, setPivotDate] = useState(new Date())
  const [filteredData, setFilteredData] = useState([])

  useEffect(()=> {
    if(data.length >= 1) {
      const {beginTimeStamp, endTimeStamp} =getMonthRangeByDate(pivotDate)
      setFilteredData(
        data.filter((it)=> beginTimeStamp <= it.date && it.date <= endTimeStamp)
        
      )
    }else {
      setFilteredData([])
    }
  },
  [data, pivotDate])

  const headerTitle  =`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`

  console.log(searchParams.get("sort"));

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
  }
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
  }
  
  return (
    <div>
      <Header 
        title={headerTitle}
        leftChild={
          <Button
            text={"<"}
            onClick={onDecreaseMonth}
            /> 
        }
        rightChild={
          <Button
            text={">"}
            onClick={onIncreaseMonth}
            /> 
        }
        />
    <Editor
       initDate={{
        date : new Date().getTime(),
        emotionId : 1,
        content : "이전에 작성했던 일기",
       }}
      onSubmit={() => {
        alert('작성 완료 버튼 클릭!!');
      }}
      />
      <DiaryList data={filteredData}/>
    </div>
  )
}


export default Home
