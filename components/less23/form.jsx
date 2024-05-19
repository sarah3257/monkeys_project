import React from 'react'
import { useForm } from "react-hook-form"


export default function Form() {
 const { register, handleSubmit, formState: { errors } } = useForm();
 const onSubForm=(_bodyData)=>{
  console.log(_bodyData)
 }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubForm)} id="id_form" >
        <label>name</label>
        <input {...register("name", { required: true, minLength: 2 })} className="form-control" type="text" />
        {errors.name && <div className="text-danger">* Enter valid name</div>}
        <label>name</label>
        <input {...register("name", { required: true, minLength: 2 })} className="form-control" type="tel" />
        {errors.name && <div className="text-danger">* Enter valid name</div>}
        <label>name</label>
        <input {...register("name", { required: true, minLength: 2 })} className="form-control" type="email" />
        {errors.name && <div className="text-danger">* Enter valid name</div>}
        <label>select</label>
        <select {...register("select", { required: true, minLength: 2 })} className="form-select" type="select" >
          <option value="male" >male</option>
          <option value="female" >Female</option>
        </select>
        <button>submit</button>
      </form>
    </div>
  )
}
