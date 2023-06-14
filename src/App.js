import logo from './logo.svg';
import './App.css';

function App() {
  const name = '나임';
  const list = ['우유', '딸기', '바나나', '요거트'];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        //객체의 값을 넣을 거라서 {}를 쓴다.
        style={{width: '200px', height: '200px'}}
        src="https://plus.unsplash.com/premium_photo-1675074446290-0282f2fed014?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="what?"
      />
    </>
  );
}

export default App;
