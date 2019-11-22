import User from "../components/signup/User"

const initialState = new User();

const signupReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ON_FIRST_NAME_ENTER':
      return {
        ...state,
        firstName: action.firstName
      }

    case 'ON_LAST_NAME_ENTER':
      return {
        ...state,
        lastName: action.lastName
      }

    case 'ON_EMAIL_ENTER':
      return {
        ...state,
        email: action.email
      }

    case 'ON_PHONE_NUMBER_ENTER':
      return {
        ...state,
        phoneNumber: action.phoneNumber
      }

    case 'SIGN_UP':
      return {
        ...state
      }
    default:
      return state
  }
}
export default signupReducer