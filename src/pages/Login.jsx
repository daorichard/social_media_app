import React from 'react';
import '../scss/styles.scss';

function Login() {
  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
            soluta maiores blanditiis fugiat sint harum quisquam at debitis
            fugit reprehenderit libero!
          </p>
          <span>Don't have an account?</span>
          <button>Register</button>
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='Username' />
            <input type='password' placeholder='Password' />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
