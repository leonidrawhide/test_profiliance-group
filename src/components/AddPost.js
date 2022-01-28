import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice'

export default function AddPost() {
	const posts = useSelector((state) => state.arrayOfPosts.post)
  	const dispatch = useDispatch()

	console.log(posts)
	return <div className='add-post'>
		<form className='add-post__form'>
			<div className='add-post__form_wrapper'>
				<label htmlFor="add-title">Заголовок</label>
				<input 
					type="text"
					name="title"
					id="add-title" 
					className='add-post__form_wrapper_title-input'
					placeholder='Введите заголовок'
				/>
			</div>
			<div className='add-post__form_wrapper'>
				<label htmlFor="add-text">Текст новости</label>
				<input
					type="text"
					name="text"
					id="add-text" 
					className='add-post__form_wrapper_text-input'
					placeholder='Введите текст новости'
				/>
			</div>
			
			<input
				type="submit"
				value="Запостить" 
				className='add-post__form_submit-input waves-effect waves-light btn-large red lighten-5'
				onClick={() => dispatch(increment())}
				/>
		</form>
	</div>;
}
