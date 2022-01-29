import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function AddPost(active, setActive) {
	const posts = useSelector((state) => state.post)
	const loginStatus = useSelector((state) => state.loginStatus)
  	const dispatch = useDispatch()
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');

	const postAction = (e) => {
		e.preventDefault()
		console.log('trying to make a post...')
		const date = new Date()
		const currentDate = `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
		const data = {
			id: posts.length,
			title: title,
			text: text,
			date: currentDate
		}
		dispatch({type: 'ADD_POST', data})
	}

	return <div className={loginStatus ? 'add-post' : 'add-post dont-show'}>
		<form className='add-post__form'>
			<div className='add-post__form_wrapper'>
				<label htmlFor="add-title">Заголовок</label>
				<input 
					type="text"
					name="title"
					value={title}
					id="add-title" 
					className='add-post__form_wrapper_title-input'
					placeholder='Введите заголовок'
					onChange={e=>setTitle(e.target.value)}
				/>
			</div>
			<div className='add-post__form_wrapper'>
				<label htmlFor="add-text">Текст новости</label>
				<input
					type="text"
					name="text"
					value={text}
					id="add-text" 
					className='add-post__form_wrapper_text-input'
					placeholder='Введите текст новости'
					onChange={e=>setText(e.target.value)}
				/>
			</div>
			
			<button
				className='add-post__form_submit-input waves-effect waves-light btn-large red lighten-5'
				onClick={postAction}
			>Запостить</button>
		</form>
	</div>;
}
