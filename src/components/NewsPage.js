import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddPost from './AddPost';


export default function NewsPage() {
	const posts = useSelector((state) => state.arrayOfPosts.post)
	let demoDate = new Date();

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
