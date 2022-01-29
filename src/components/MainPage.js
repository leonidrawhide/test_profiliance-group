import React from 'react';
import { useSelector } from 'react-redux';

export default function MainPage() {
  const loginStatus = useSelector((state) => state.loginStatus)
  const userName = loginStatus ? 'Пользователь' : 'Гость'
  return <div className="main-wrapper">
    <div className='main-wrapper__hello-user'>
      <h1>Привет, {userName}</h1>
    </div>
  </div>;
}
