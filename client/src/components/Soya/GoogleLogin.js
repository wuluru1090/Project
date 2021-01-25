// import React from 'react'
// import TwitterLogin from 'react-twitter-login'

// export default (props) => {
//   const authHandler = (err, data) => {
//     console.log(err, data)
//   }

//   return (
//     <TwitterLogin
//       authCallback={authHandler}
//       // consumerKey={CONSUMER_KEY}
//       // consumerSecret={CONSUMER_SECRET}
//     />
//   )
// }

import React from 'react'

import { GoogleLogin } from 'react-google-login'
// refresh token
import { refreshTokenSetup } from './refreshTokenSetup'
import '../../style/soya/login2.scss'
import { red } from '@material-ui/core/colors'
import { FcGoogle } from 'react-icons/fc'

const clientId =
  '1024685378716-gd8v2qo2lq12ua9q32shrasvnr2dg2ns.apps.googleusercontent.com'
function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj)
    alert(`登入成功! ${res.profileObj.name} 歡迎您`)
    refreshTokenSetup(res)
  }

  // const onFailure = (res) => {
  //   console.log('Login failed: res:', res)
  //   alert(`登入失敗 請再次確認`)
  // }

  return (
    <div>
      <GoogleLogin
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="btn loginbtntheme loginbtntheme2 d-flex"
          >
            <FcGoogle className="loginbtnthemeicon2" />
            Google
          </button>
        )}
        clientId={clientId}
        buttonText="Google"
        onSuccess={onSuccess}
        // onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        // style={{ marginBottom: '100px', background: 'red' }}
        isSignedIn={true}
        className="googlebuttonimportant btn btn-danger col-4"
      />
    </div>
  )
}

export default Login
