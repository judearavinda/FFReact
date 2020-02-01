import React from 'react';
import { useForm } from 'react-hook-form';

export default function SubmitPrediction() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select name="Market" ref={register({ required: true })}>
        <option value="Nasdaq">Nasdaq</option>
        <option value=" NYSE"> NYSE</option>
        <option value=" TSX"> TSX</option>
      </select>
      <input type="text" placeholder="Ticker" name="Ticker" ref={register({required: true})} />
      <input type="text" placeholder="Target Price" name="Target Price" ref={register({required: true, max: 1000000})} />
      <input type="datetime" placeholder="Target Date" name="Target Date" ref={register({required: true})} />
      <textarea name="Note" ref={register} />

      <input type="submit" />
    </form>
  );
}