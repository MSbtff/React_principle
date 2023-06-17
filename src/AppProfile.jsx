import './App.css';
import Avartar from './components/Avartar';
import Profile from './components/Profile';

function AppProfile() {
  return (
    <>
      <Avartar
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbPEOgnXSl7ewS4sETsUgO4Oz1bjMhRjOtw&usqp=CAU"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        name="James Kim"
        title="Frontend Dev"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        name="Anna Young"
        title="Backend Dev"
      />
      <Profile
        image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        name="Bob Yu"
        title="Frontend Dev"
      />
    </>
  );
}

export default AppProfile;

//컴포넌트의 속성으로 원하는 밸류와 키를 명시하면 키와 밸류가 props라는 객체로 전달됨 그래서 컴포넌트 내
// props. 으로 접근할 수 있음
// 위에 방식으로 해도 되지만 image,title,name을 객체로 만들어서 전달하는 방식도 있음
// 하위 컴포넌트에서는 props.image, props.title, props.name으로 사용하지 않고
// image, title, name으로 사용할 수 있음 - Profile.jsx 참고
