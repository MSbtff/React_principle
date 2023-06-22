import React, {useState} from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <span className="number">{count}</span>
      <button
        className="button"
        // 클로저(스냅샷을 찍는다고 생각하면 된다.) 렉시컬 환경 외부 함수 참조보다 콜백함수 형태로 하는게 좋다
        onClick={() => {
          // 이건 값이 5씩 증가
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);

          //이건 값이 하나씩만 증가
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
          console.log(setCount);
        }}
      >
        ADD +
      </button>
    </div>
  );
}
