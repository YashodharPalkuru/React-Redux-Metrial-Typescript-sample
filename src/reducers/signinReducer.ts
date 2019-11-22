import Login from "../components/signin/Login"

const initialState = {
  userId: "Yashodhar",
  password: "password"
};

const signinReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ON_USED_ID_ENTER':
      return {
        ...state,
        userId: action.userId
      }

    case 'ON_PASSWORD_ENTER':
      return {
        ...state,
        password: action.password
      }
    case 'SIGN_IN':
      return {
        ...state
      }
    default:
      return state
  }
}
export default signinReducer