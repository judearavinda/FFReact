import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => { 
    console.log(data);
    console.log("what up yo");
    console.log('login clicked')
    let formData = JSON.stringify({
        email: data.Email,
        password: data.Password
    })

    axios.post('http://127.0.0.1:8000/api/user/login', formData, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        }
    }).then(function (response) {
          //handle success
          console.log(response);
      })
      .catch(function (error) {
          //handle error
          console.log(error);
      })
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email" value ="darkpeople1@hotmail.com" name="Email" ref={register({required: true})} />
      <input type="text" placeholder="Password" value ="password" name="Password" ref={register({required: true, min: 8})} />
      <input type="submit" />
    </form>
  );
}