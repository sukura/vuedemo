import Cookies from 'js-cookie';

const TokenKey = 'Account-Token';
const AccountId = 'Account-Id';
const AccountType = 'Account-Type';
const AccountName = 'Account-Name';

export function getToken() {
    return Cookies.get(TokenKey);
}

export function setToken(token) {
    return Cookies.set(TokenKey, token);
}

export function removeToken() {
    return Cookies.remove(TokenKey);
}

export function getId() {
    return Cookies.get(AccountId);
}

export function setId(Id) {
    return Cookies.set(AccountId, Id);
}

export function getType() {
    return Cookies.get(AccountType);
}

export function setType(type) {
    return Cookies.set(AccountType, type);
}

export function getName() {
    return Cookies.get(AccountName);
}

export function setName(name) {
    return Cookies.set(AccountName, name);
}