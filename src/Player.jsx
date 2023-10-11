import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import List from './components/List'
import Detail from './components/Detail'
import './Player.css'

const Player = () => {
    /*
    (1) public 안의 json파일세어 데이터 가져오기
        => useEffect, axios 사용
        => state 생성 후 가져온 데이터 세팅
    (2) 컴포넌트 생성 및 라우팅 설정
        => 메인페이지: Main.jsx,
        => 리스트페이지: List.jsx, / list
        => 상세페이지: Detail.jsx, / detail 
    */
    /*
    가져온 json데이터 Detail 컴포넌트로 넘겨주기
    */
    const [list, setList] = useState([]);
    const url = '/player.json';

    useEffect(()=>{
      console.log("Spring으로 요청");
      let url = "http://localhost:8089/SpringBoot2/PlayerList.do"
        axios
        .post(url, {resonseType: 'blob'})
        .then((res)=>{
          console.log(res.data);
          setList(res.data);
        })
        .catch(()=>{})
    },[]) // 빈배열: 화면이 시작할 때 useEffect가 작동
    
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/list' element={<List list={list}/>}></Route>
        <Route path='/detail/:index' element={<Detail list={list}/>}></Route>
      </Routes>
    </div>
  )
}

export default Player