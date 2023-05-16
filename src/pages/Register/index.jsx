import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/elements/Button";
import { app } from "../../firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserPool from "./UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { Header } from "../../components/Header";

const Register = () => {
    let navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false);

    const onSubmit = (data) => {
        setLoading(false);
        setIsSignedUp(true)
        UserPool.signUp(data.email, data.password, [], null, (err, data) => {
          if (err) {
            alert(err);
            setIsSignedUp(false);
            console.log(data);            
          }          
            // if (err == "InvalidParameterException: 3 validation errors detected: Value at 'password' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[\S]+.*[\S]+$; Value at 'username' failed to satisfy constraint: Member must satisfy regular expression pattern: [\p{L}\p{M}\p{S}\p{N}\p{P}]+; Value at 'username' failed to satisfy constraint: Member must have length greater than or equal to 1") alert("Username Password Empty");    

            
            
            //props.onFormSwitch('registerverifyuser')
          });
        
    }

    const onSubmit2 = (data) => {
        setLoading(false);
        setIsSignedUp(true)
        const user = new CognitoUser({
            Username: data.email,
            Pool: UserPool,
          });
          console.log(user);
          user.confirmRegistration(data.name2, true, (err, data) => {
            if (err) {
              console.log(err);
              alert("Couldn't verify account");
              navigate('/login');
            } else {
              console.log(data);
              alert('Account verified successfully');
              navigate('/login');
            }
          });
        
    }

    return (
      <>
            <Header />
        <div className="h-screen bg-black flex items-center justify-center">
          <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 transition duration-300 animate-pink blur gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
            <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
              <h5 className="text-3xl">{isSignedUp ? "Verify OTP" : "Register"}</h5>
              <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {isSignedUp ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <label htmlFor="name2" className="block text-lg font-medium text-gray-200 mb-4">
                    Email Verification
                  </label>
                  <input
                    {...register('name2')}
                    id="name2"
                    type="text"
                    className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200 mb-4"
                    style={{ marginBottom: '1rem' }}
                  />
                  <Button size="large" onClick={handleSubmit(onSubmit2)} placeholder="code">{loading ? 'loading' : 'Verify'}</Button>
                </div>
                
                  
                ) : (
                  <>
                    <div>
                      {/* <label htmlFor="name" className="block text-lg font-medium text-gray-200">
                        Name
                      </label>
                      <input
                        {...register('name1')}
                        id="name1"
                        type="text"
                        className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                      /> */}
                    </div>
                    <div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <label htmlFor="name2" className="block text-xl font-medium text-gray-200 mb-4"style={{ fontSize: '2rem' }}>
                    Sign up
                  </label>
                  </div>
                      <label htmlFor="email" className="block text-lg font-medium text-gray-200">
                        Email
                      </label>
                      <input
                        {...register('email')}
                        id="email"
                        type="email"
                        className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-lg font-medium text-gray-200">
                        Password
                      </label>
                      <input
                        {...register('password')}
                        id="password"
                        type="password"
                        className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                      />
                    </div>
                    <Button size="large">{loading ? 'loading' : 'Register'} </Button>
                  </>
                )}
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
        </>
      );
      
}

export default Register;