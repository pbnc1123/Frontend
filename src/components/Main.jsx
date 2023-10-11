/** 화면 메인 첫 페이지 */
import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  /*
  Player List 클릭 시 List 컴포넌트로 이동
  => Link 이용
  */
  return (
    <div style={{
      display : 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <img src='https://cdn.eyesmag.com/content/uploads/posts/2022/02/11/korea-fifa-men-world-ranking-d3cb83d1-e20a-4ffe-9238-ca5d3fb408e8.jpg'
      width='30%'/>
      <Link to='/list'
      style={{
        fontSize: '1.5em',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'black',
        backgroundColor: 'lightgrey',
        padding: '20px 30px',
        borderRadius: '20px'
      }}
      >Player List</Link>
    </div>
  )
}

export default Main