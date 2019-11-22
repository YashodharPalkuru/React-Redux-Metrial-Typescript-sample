
export const signInAction = (userName: string, password: string) => ({
  type: 'SIGN_IN',
  data: { userName, password }
})

export const onUserNameEnter = (userId: string) => ({
  type: 'ON_USED_ID_ENTER',
  userId: userId
})


export const onPasswordEnter = (password: string) => ({
  type: 'ON_PASSWORD_ENTER',
  password: password
})



