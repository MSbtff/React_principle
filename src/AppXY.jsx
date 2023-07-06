import React, {useState} from 'react';
import './AppXY.css';

// 좌표라는 하나의 객체를 나타내고 있는데 x,y를 따로 관리하고 있는데
// 서로 연관있는 데이터를 사용하기위해 객체를 묶는거 처럼 리액트도 마찬가지다.
// 좌표를 하나의 객체로 묶어서 관리하면 좋다.
// 리액트에서도 업데이트가 동시에 일어난다면 객체로 묶어서 관리해주는게 좋다

export default function AppXY() {
  const [position, setPostion] = useState({x: 0, y: 0, z: 0});
  return (
    <div
      className="container"
      onPointerMove={(e) => {
        console.log(e.clientX, e.clientY);
        //setPostion({x: e.clientX, y: e.clientY});
        // 만약 수평으로만 이동이 가능하다면?
        // 객체를 리턴해줄때는 () 안에 {}로 감싸줘야한다.
        // z값도 추가해주고 싶으면 z: prev.z 로 해주면 되지만
        // 간단하게 표현하고 싶으면 ...prev로 표현해준다.
        setPostion((prev) => ({...prev, x: e.clientX}));
      }}
    >
      <div
        className="pointer"
        style={{transform: `translate(${position.x}px, ${position.y}px)`}}
      />
    </div>
  );
}
