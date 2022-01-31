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
			login: 'test',
			email: 'test@mail.ru',
			password: 'qwe',
			loginAttempts: 0
		},
		{
			login: 'user',
			email: 'user@mail.ru',
			password: '123',
			loginAttempts: 0
		}
	],
	nameOfUser: 'Гость',
	loginStatus: false,
	loginPopup: false,
	loginAttempts: 0
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
			let userIndex = null
			for (let i = 0; i < state.users.length; i++) {
				if (action.data.login == state.users[i].login || action.data.login == state.users[i].email) userIndex = i
			}
			if (userIndex != null && state.users[userIndex].password == action.data.password)
			{
				console.log('successful login!')
				return {...state, loginStatus: true, loginPopup: false, nameOfUser: action.data.login}
			} else {
				console.log('unsuсcessful login...')
				return {...state, loginAttempts: (state.loginAttempts + 1)}
			}
		case 'LOGOUT':
			return {...state, loginStatus: false, loginAttempts: 0, nameOfUser: 'Гость'}
        case 'ADD_POST':
            return {...state, post: [action.data, ...state.post]}
		case 'CHANGE_POPUP_VALUE':
			return {...state, loginPopup: !(state.loginPopup)}
        default:
            return state
    }
}