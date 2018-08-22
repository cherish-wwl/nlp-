import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}


const UserName = 'userName' 

export function getUserName() {
  return Cookies.get(UserName)
}

export function setUserName(name) {
  return Cookies.set(UserName, name)
}

export function removeUserName() {
  return Cookies.remove(UserName)
}

const expires_in = 'expires_in' 

export function getExpires_in() {
  return Cookies.get(expires_in)
}

export function setExpires_in(name) {
  return Cookies.set(expires_in, name)
}

export function removeExpires_in() {
  return Cookies.remove(expires_in)
}
