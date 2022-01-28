import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'posts',
  initialState: {
    post: [
		{
			id: 1,
			title: 'Первый пост',
			text: 'Это первый пост в новостном блоке',
			date: '01.01.1970'	
		},
		{
			id: 2,
			title: 'Второй пост',
			text: 'Это второй пост в новостном блоке',
			date: '28.01.2022'
		}
  	]
  },
  reducers: {
    increment: (state) => {
      state.post.push({
		  id: state.post.length + 1,
		  title: 'third',
		  text: 'text',
		  date: '30.02.1230'
		})
    },
    decrement: (state) => {
		if (state.post.length > 2) {
			state.posts.splice(2);
		}
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer