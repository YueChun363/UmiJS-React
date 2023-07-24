import React, { useEffect } from 'react';
import request from 'umi-request';
const Login = () => {
  request.get('/api/login').then((res) => {
    console.log('login res', res);
  });
};

export default function UserLogin() {
  useEffect(() => {
    Login();
  }, []);

  return <div>User Login Page</div>;
}
