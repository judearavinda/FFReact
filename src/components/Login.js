import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => { 
    console.log(data);
    console.log("what up yo");
    var bodyFormData = new FormData();
    bodyFormData.set("email", data.Email);
    bodyFormData.set("password", data.Password);
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/user/login',
      data: bodyFormData,
      headers: {'Content-Type': "application/json"}
      })
      .then(function (response) {
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
      <input type="email" placeholder="Email" name="Email" ref={register({required: true})} />
      <input type="text" placeholder="Password" name="Password" ref={register({required: true, min: 8})} />
      <input type="submit" />
    </form>
  );
}