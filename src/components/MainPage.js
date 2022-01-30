import React from 'react';
import { useSelector } from 'react-redux';

export default function MainPage() {
  const loginStatus = useSelector((state) => state.loginStatus)
  const user = useSelector((state) => state.users)
  return <div className="main-wrapper">
    <div className='main-wrapper__hello-user'>
      <h1>Привет, {loginStatus ? user[0].login : 'Гость'}</h1>
    </div>
  </div>;
}
