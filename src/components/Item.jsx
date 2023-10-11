import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const Item = ({item, index}) => {
    /*
    프로필 카드 클릭 시 해당하는 선수의 상세페이지로 이동 => useNavigate 사용
    detail/index 가 되도록 작업 => useParams 사용
    */
   const nav = useNavigate()

  return (
    <div className='item-item' onClick={()=>{

        console.log("Detail 요청");
        let url = "http://localhost:8089/SpringBoot2/PlayerDetail.do?name="+item.name;

        axios.post(url)
        .then((res)=>{
            console.log(res.data); // 나상호의 정보
        })

        nav(`/detail/${index}`)
    }}>
        <img src={"data:image/;base64,"+ item.imgSrc}/>
        <table>
            <tbody>
                <tr>
                    <td>이름</td>
                    <td>{item.name}</td>
                </tr>
                <tr>
                    <td>포지션</td>
                    <td>{item.position}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Item