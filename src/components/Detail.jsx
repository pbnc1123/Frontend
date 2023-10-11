/* 선수들 개별 상세페이지 */
import React from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item';

/* Player에서 넘겨진 list값을 받아서 출력 */
const Detail = ({list}) => {

  let {index} = useParams();
  console.log(list[index]);

  return (
    <div className='item-item'>
      {/* Item 컴포넌트에서 복붙 */}
      <img src={"data:image/;base64,"+ list[index].imgSrc}/>
        <table>
            <tbody>
                <tr>
                    <td>이름</td>
                    <td>{list[index].name}</td>
                </tr>
                <tr>
                    <td>포지션</td>
                    <td>{list[index].position}</td>
                </tr>
                <tr>
                    <td>나이</td>
                    <td>{2023-list[index].age}</td>
                </tr>
                <tr>
                    <td>키, 몸무게</td>
                    <td>{list[index].height}, {list[index].weight}</td>
                </tr>
                <tr>
                    <td>소속</td>
                    <td>{list[index].team}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Detail