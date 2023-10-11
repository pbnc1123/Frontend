/** 대한민국 국가대표 선수들 목록 */
import React from 'react'
import Item from './Item'

const List = ({list}) => {
  
  console.log(list);
  /*
  player에서 넘겨준 값, 받아온 데이터를 
  item 컴포넌트에 보내서
  진짜 데이터가 적용된 화면이 나올 수 있게 만들기
  */
  /*
  (1) 포지션이 MF인 선수만 나오는 배열을 생성하기
  (2) 만들어진 배열을 map함수로 뿌려주기
  */

  /** filter함수로 새로운 배열 생성 */
  const mfList = list.filter(item=>item.position=='MF')
  console.log(mfList);
 
  return (
    <div className='list-container'>
      <h1>KOREA REPUBLIC</h1>
      <div className='item-container'>
        {list.map((item, index)=>
        <Item item={item} index={index}/>)}
      </div>

      <h1>MF</h1>
      <div className='item-container'>
        {mfList.map((item, index)=>
        <Item item={item} index={index}/>)}
      </div>
    </div>
  )
}

export default List