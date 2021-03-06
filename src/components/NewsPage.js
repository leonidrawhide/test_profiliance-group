import React from 'react';
import { useSelector } from 'react-redux';
import AddPost from './AddPost';


export default function NewsPage() {
	const posts = useSelector((state) => state.post)

  	return <div className='news-wrapper'>
		<AddPost />
	  	<div className='news-wrapper__list'>
		  	{posts.map((post, index) => (
				<div className='news-wrapper__list_block' key={post.id}>
					<h3 className='news-wrapper__list_block_title'>{post.title}</h3>
					<p className='news-wrapper__list_block_text'>{post.text}</p>
					<span className='news-wrapper__list_block_date-created'>{post.date}</span>
				</div>
			))}
	  </div>
  </div>;
}
