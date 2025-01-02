
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../../redux/action/auth";
import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';
import { Loader } from "../../../assets";
import { toast } from "react-toastify";

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    dispatch(login(data, moveToNext, onError));
  };
  const onError = (errorMessage) => {
    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    document.getElementB
  }

  function moveToNext(response) {
    if (response) {
      localStorage.setItem('user', JSON.stringify(response))
      router.push('/student-reviews');
    }
  }
  return (

    <div className="login-page">
     

      {
        auth.loading === true
        &&
        <>
         <div className='spinner-admin'>     <Loader /> </div>
        </>
   
      }
      
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              })}
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>


          <button
            disabled={auth.loading}
            type="submit">Login</button>
        </form>

        <style jsx>{`
         
            .login-page {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              background-color: #f1f1f1;
              margin: 0;
            }
  
            .login-container {
              max-width: 400px;
              width: 100%;
              padding: 2rem;
              background-color: #f9f9f9;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
              border-radius: 8px;
              text-align: center;
            }
  
            h2 {
              margin-bottom: 1.5rem;
              font-size: 1.5rem;
              color: #333;
            }
  
            .form-group {
              margin-bottom: 1.5rem;
            }
  
            label {
              display: block;
              margin-bottom: 0.5rem;
              font-weight: bold;
              color: #333;
              font-size: 1rem;
              text-align: left;
            }
  
            input {
              width: 100%;
              padding: 0.75rem;
              font-size: 1rem;
              border: 1px solid #ddd;
              border-radius: 4px;
              box-sizing: border-box;
              transition: border-color 0.3s ease;
            }
  
            input:focus {
              border-color: #0070f3;
              outline: none;
            }
  
            .error-message {
              color: red;
              font-size: 0.875rem;
              margin-top: 0.25rem;
            }
  
            button {
              background-color: #34495d;
              color: white;
              padding: 10px 30px;
              border: none;
              border-radius: 4px;
              font-size: 1rem;
              cursor: pointer;
              transition: background-color 0.3s;
            }
  
            button:hover {
              background-color: #333;
            }
          `}</style>
      </div>
    </div>

  );

};

export default Login;