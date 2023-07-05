import React, {useEffect} from 'react';
import {useState} from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleChange = () => setChecked((prev) => !prev);

  //useEffect는 렌더링이 완료된 후에 실행된다.
  // 네트워크 요청을 할 때 useEffect를 사용한다. , 네트워크에서 무거운 작업을할 때

  useEffect(() => {
    // 데이터를 가져올때 백틱 문법에서 조건부로 파일명을 지정해 데이터를 가져올 수 있다.
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      });
    return () => {
      console.log('🧹데이터를 정리합니다.');
    };
    //checked가 변경될 때만 실행
  }, [checked]);

  return (
    <div>
      <>
        <input
          id="checkbox"
          type="checkbox"
          value={checked}
          onChange={handleChange}
        />
        <label htmlFor="checkbox">Show Only 🔥 Sale</label>
        <ul>
          {/* 리스트에 자식요소를 만들때 유니크한(고유한) key를 가져야함 
            동일한 id인지 업데이트 하는지, 배열의 위치를 업데이트할지 렌더링 할지 판단 함
          */}
          {products.map((product) => (
            <li key={product.id}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          ))}
        </ul>
        {/* <button onClick={() => setCount((prev) => prev + 1)}>{count}</button> */}
      </>
    </div>
  );
}
