import React from 'react';
import Counter from './components/Counter';
import './App.css';
import {useState} from 'react';

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <div className="container">
      <div className="banner">
        Total Count: {count} {count > 10 ? '🔥' : '❄️'}
      </div>

      <div className="counters">
        {/* props 는 total 과 onClick 그러니 Counter로 props 전달 해줘야 함 */}
        <Counter total={count} onClick={handleClick} />
        <Counter total={count} onClick={handleClick} />
      </div>
    </div>
  );
}

// 컴포넌트를 만들어 나갈때 공통적인 데이터는 필요하고 근접한 부모 컴포넌트의 두고
// 필요한 데이터는 prop으로 전달해주고 클릭했을때 부모에서 처리하고 싶으면 prop으로 전달
//외부에 전달하는 props 콜백함수 및 외부로 노출하는 API는 우리가 노출하고 싶은 범위 내에서,
// 최대한 좁혀서 제공해 주는게 좋다.
