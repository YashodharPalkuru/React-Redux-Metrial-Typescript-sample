import { connect } from 'react-redux';
import SignIn from './Signin';
import Login from './Login';
import { signInAction, onUserNameEnter, onPasswordEnter } from '../../actions';

const getUserDetails = (login: Login, filter: String) => {
  switch (filter) {
    case 'LOGGED_IN_ALREADY':
      return login;
  }
}


const mapStateToProps = (state: any) => {
  return { ...state.signIn }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSignInClick: () => {
      dispatch(signInAction);
    },

    onUserNameEnter: (event: any) => {
      console.error("inside onUserNameEnter : " + event);
      dispatch(onUserNameEnter(event.target.value));
    },

    onPasswordEnter: (event: any) => {
      dispatch(onPasswordEnter(event.target.value));
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn)