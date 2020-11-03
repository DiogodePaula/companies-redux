export function login(data) {
  return {
    type: 'login',
    data,
  };
}

export function logout() {
  return {
    type: 'logout',
    data: '',
  };
}
