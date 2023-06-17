import React from 'react';

export default function Profile() {
  return (
    <div className="profile">
      <img
        className="photo"
        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        alt="avatar"
      />
      <h1>james kim</h1>
      <p>front end dev</p>
    </div>
  );
}

//독립적이면 재사용성잉 뛰어남
