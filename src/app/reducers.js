// import { createSlice } from '@reduxjs/toolkit'

// export const counterSlice = createSlice({
//   name: 'posts',
//   initialState: {
//     post: [
// 		{
// 			id: 1,
// 			title: 'Первый пост',
// 			text: 'Это первый пост в новостном блоке',
// 			date: '01.01.1970'	
// 		},
// 		{
// 			id: 2,
// 			title: 'Второй пост',
// 			text: 'Это второй пост в новостном блоке',
// 			date: '28.01.2022'
// 		}
//   	],
// 	users: [
// 		{
// 			login: 'test-user',
// 			email: 'test@mail.ru',
// 			password: 'qwerty123'
// 		}
// 	],
// 	loginStatus: false
//   },
//   reducers: {
//     increment: (state) => {
//       state.post.push({
// 		  id: state.post.length + 1,
// 		  title: 'third',
// 		  text: 'text',
// 		  date: '30.02.1230'
// 		})
//     },
//     login: (state) => {
// 		console.log(login)
// 	}
//   },
// })

// // Action creators are generated for each case reducer function
// export const { increment, login } = counterSlice.actions

// export default counterSlice.reducer

const initialState = {
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
  	],
	users: [
		{
			login: 'test-user',
			email: 'test@mail.ru',
			password: 'qwerty123'
		}
	],
	loginStatus: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
			if (
				(action.data.login == state.users.map(userInfo => userInfo.login) || 
				action.data.login == state.users.map(userInfo => userInfo.email)) && 
				action.data.password == state.users.map(userInfo => userInfo.password)
			) {
				console.log('sucessful login!')
				return {...state, loginStatus: true}
			} else {
				console.log('unsucessful login...')
				return state
			}
		case 'LOGOUT':
			state.loginStatus = false
			return state
        case 'ADD_POST':
            return {...state, post: [...state.post, action.data]}
        default:
            return state
    }
}