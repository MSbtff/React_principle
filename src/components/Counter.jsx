import React, {useState} from 'react';

export default function Counter({total, onClick}) {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <p className="number">
        {count}
        <span className="total">/{total}</span>
      </p>
      <button
        className="button"
        // 클로저(스냅샷을 찍는다고 생각하면 된다.) 렉시컬 환경 외부 함수 참조보다 콜백함수 형태로 하는게 좋다
        onClick={() => {
          setCount((prev) => prev + 1);
          onClick();
          // // 이건 값이 5씩 증가 비동기적 작용 할 때
          // setCount((prev) => prev + 1);
          // setCount((prev) => prev + 1);
          // setCount((prev) => prev + 1);
          // setCount((prev) => prev + 1);
          // setCount((prev) => prev + 1);

          //   //이건 값이 하나씩만 증가
          //   setCount(count + 1);
          //   setCount(count + 1);
          //   setCount(count + 1);
          //   setCount(count + 1);
          //   setCount(count + 1);
          //   console.log(setCount);
        }}
      >
        ADD +
      </button>
    </div>
  );
}
