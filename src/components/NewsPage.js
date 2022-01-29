import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddPost from './AddPost';
import initialState from '../app/reducers'


export default function NewsPage() {
	// const posts = [{title: 'lol', text: 'olo', date: '34'}]
	const posts = useSelector((state) => state.post)

  	return <div className='news-wrapper'>
		<AddPost />
	  	<div className='news-wrapper__list'>
		  	{posts.map((post, index) => (
				<div className='news-wrapper__list_block'>
					<h3 className='news-wrapper__list_block_title'>{post.title}</h3>
					<p className='news-wrapper__list_block_text'>{post.text}</p>
					<span className='news-wrapper__list_block_date-created'>{post.date}</span>
				</div>
			))}
	  </div>
  </div>;
}
