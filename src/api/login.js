import fetch from '../utils/fetch';

export function login(account, password) {
    return fetch({
        url: '/login',
        method: 'post',
        data: {
            username: account,
            password
        }
    });
}

export function getRoles() {
    return fetch({
        url: '/user_role',
        method: 'post'
    });
}

export function changePassword(oldPassword, newPassword) {
    return fetch({
        url: '/user_changePassword',
        method: 'post',
        data: {
            oldPassword,
            newPassword
        }
    });
}

export function logout() {
    return fetch({
        url: '/logout',
        method: 'post'
    });
}
