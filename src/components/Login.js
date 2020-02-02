import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import Cookies from 'universal-cookie';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => { 
    console.log(data);
    console.log("what up yo");
    console.log('login clicked')
    let formData = JSON.stringify({
        email: data.Email,
        password: data.Password
    })
    axios.post('http://localhost:8000/api/user/login', formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
          //handle success
          const cookies = new Cookies();
          console.log(response);
          cookies.set('tokenLogin', response.data.account.token);
          console.log(cookies.get('tokenLogin'));
      })
      .catch(function (error) {
          //handle error
          console.log(error);
      })
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email" defaultValue ="darkpeople1@hotmail.com" name="Email" ref={register({required: true})} />
      <input type="text" placeholder="Password" defaultValue ="password" name="Password" ref={register({required: true, min: 8})} />
      <input type="submit" />
    </form>
  );
}