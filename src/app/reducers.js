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
			password: 'qwerty123',
			loginAttempts: 0
		}
	],
	loginStatus: false,
	loginPopup: false
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
				return state
			}
		case 'LOGOUT':
			// state.loginStatus = false
			return {...state, loginStatus: false}
        case 'ADD_POST':
            return {...state, post: [...state.post, action.data]}
		case 'CHANGE_POPUP_VALUE':
			return {...state, loginPopup: !(state.loginPopup)}
        default:
            return state
    }
}