import fetch from '../utils/fetch';

export function login(loginForm) {
    return fetch({
        url: 'login',
        method: 'post',
        data: {
            username: loginForm.username,
            password: loginForm.password
        }
    });
}

export function logout() {
    return fetch({
        url: 'logout',
        method: 'post'
    });
}
