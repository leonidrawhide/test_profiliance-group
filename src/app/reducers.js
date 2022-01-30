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
		}
	],
	loginStatus: false,
	loginPopup: false,
	loginAttempts: 0
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
				return {...state, loginStatus: true, loginPopup: false}
			} else {
				console.log('unsucessful login...')
				return {...state, loginAttempts: (state.loginAttempts + 1)}
			}
		case 'LOGOUT':
			return {...state, loginStatus: false, loginAttempts: 0}
        case 'ADD_POST':
            return {...state, post: [action.data, ...state.post]}
		case 'CHANGE_POPUP_VALUE':
			return {...state, loginPopup: !(state.loginPopup)}
        default:
            return state
    }
}