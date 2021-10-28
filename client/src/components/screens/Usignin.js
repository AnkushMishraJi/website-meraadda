import React ,{useState} from "react";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import firebase from "../../firebase";

const UserSignin = () =>{
    const [otp,setOtp]=useState("")

    const configureCaptcha=()=>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
    console.log("Captcha verified")
    },
    defaultCountry:"IN"
    });
    }
    const onSignInSubmit = (e) =>{
        e.preventDefault()
        configureCaptcha()
        const phoneNumber ="+91"+localStorage.getItem("phone");
        console.log(phoneNumber)
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log("OTP has been sent")
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
       console.log(error)
    });
    }
    const onSubmitOtp = (e)=>{
        e.preventDefault()
        const code = otp;
        console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  console.log(JSON.stringify(user))
  alert("User is verified")
  console.log(result)

  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
});
    }
    return (
        <>
          <div className="mycard card">
      <div className="auth-card input-field">
        <h2>User Sign-in</h2>
        {onSignInSubmit}
        <form onSubmit={onSubmitOtp}>
            <input name="otp" type="text"  placeholder="Enter OTP" required value={otp} onChange={(e)=>setOtp(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
        <div id="sign-in-button"></div>
      </div>
    </div>
        
        </>
    )
}

export default UserSignin