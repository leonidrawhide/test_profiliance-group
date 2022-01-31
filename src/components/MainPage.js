import React from 'react';
import { useSelector } from 'react-redux';

export default function MainPage() {
  const userName = useSelector((state) => state.nameOfUser)
  return <div className="main-wrapper">
    <div className='main-wrapper__hello-user'>
      <h1>Привет, {userName}</h1>
    </div>
  </div>;
}
