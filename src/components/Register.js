import React from 'react';
import { useForm } from 'react-hook-form';

export default function Register() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email" name="Email" ref={register({required: true})} />
      <input type="text" placeholder="Password" name="Password" ref={register({required: true, min: 8})} />
      <input type="text" placeholder="First name" name="First name" ref={register({required: true})} />
      <input type="text" placeholder="Last name" name="Last name" ref={register({required: true})} />
      <input type="date" placeholder="Birthday" name="Birthday" ref={register({required: true})} />
      <select name="Country" ref={register({ required: true })}>
        <option value="Canada">Canada</option>
        <option value=" USA"> USA</option>
      </select>

      <input type="submit" />
    </form>
  );
}