import { remove } from '@syncfusion/ej2/base';
import React, { useEffect, useState } from 'react';

export default function OnchangeFormValidationReact() {
    // 1.state /hook variable
    const [initialState ,setInitialState] = useState({
        fname: '',
        lname:'',
        email:'',
        password:'',
        con_password:''
    })
    const [state, setState] = useState(initialState);
    const [error, setError] = useState(initialState);

    //2.methods
    let handleChange = (e)=>{
        let newState = {...state}
        newState = {...state,[e.target.name]:e.target.value}
        setState({...state,...newState});
        remove(newState);
    }

    let remove = (values)=>{
        const textformate = /^[a-zA-Z]+$/;
        const emailformat = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(values.fname){
            if(!textformate.test(values.fname)){
                error.fname = "Please Enter only Aphabets";
            }else{
                error.fname = ""
            }
        } 
         if (values.lname){
            if(!textformate.test(values.lname)){
                error.lname = "Please Enter only Aphabets";
            }else{
                error.lname = ""
            }
        }
         if(values.email){
            if(!emailformat.test(values.email)){
                error.email = "This is not a valid email format!";
            }else{
                error.email = ""
            }
        }
         if(values.password){
            if(values.password.length < 5){
                error.password = "Please Enter Your Minimum 5 Digites ";
            }else if(values.password.length > 10){
                error.password = "Please Enter Your Maximum 10 Digites ";
            }else{
                error.password = ""
            }    
        }
         if(values.con_password){
            if(values.password == values.con_password){
                error.con_password = ""
            }else{
                error.con_password = "Please check password does not match";
            }
        }else{

        }
    }



    let handleSubmit =(e)=>{
        e.preventDefault();
        setError(myFormValidatError(state))
        
    }


    let myFormValidatError = (value)=>{
        const textformate = /^[a-zA-Z]+$/;
        const emailformat = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const formError = {}
        if((!value.fname)&&(!value.lname)&&(!value.email)&&(!value.password)&&(!value.con_password)){
            formError.fname = "Please Enter Your First Name";
            formError.lname = "Please Enter Your Last Name ";
            formError.email = "Please Enter Your Email Address ";
            formError.password = "Please Enter Your Password ";
            formError.con_password = "Please Enter Your Confirm Password ";
        }
        else{
            if(!value.fname){
                formError.fname = "Please Enter Your First Name";
            }else{
                if(!textformate.test(value.fname)){
                    formError.fname = "Please Enter only Aphabets";
                }
            } if(!value.lname){
                formError.lname = "Please Enter Your Last Name ";
            }else if(!value.email){
                formError.email = "Please Enter Your Email Address ";
            }else{
                if(!emailformat.test(value.email)){
                    formError.email = "This is not a valid email format!";
                }
            } if(!value.password){
                formError.password = "Please Enter Your Password ";
            }else{
                if(value.password.length < 5){
                    formError.password = "Please Enter Your Minimum 5 Digites ";
                }else if(value.password.length > 10){
                    formError.password = "Please Enter Your Maximum 10 Digites ";
                }
            } if(!value.con_password){
                formError.con_password = "Please Enter Your Confirm Password ";
            }else{
                if(value.password == value.con_password){

                }else{
                    formError.con_password = "Please check password does not match";
                }
            }
        }
         return formError;
    }
    

    //3.return Statement
  return (
    <div className="App">
      <header className="App-header">
          {/* <pre>{JSON.stringify(state , undefined , 2)}</pre> */}
          {/* {JSON.stringify(state , undefined , 2)} */}
        <form className="offSet-1 w-25 border p-3 mt-5" onSubmit={handleSubmit}>
          <h4 className='text-white'>Form Validation</h4>
          <input type="text" name="fname" id="fname" onChange={handleChange} className="form-control fname" placeholder="Please Enter Your First Name" value={state.fname} /><div style={{color: 'red',fontSize:"16px" }} id='fn' className='fn' >{error.fname}</div><br />
          <input type="text" name="lname" id="lname" onChange={handleChange} className="form-control lname" placeholder="Please Enter Your Last Name" value={state.lname} /><div style={{color: 'red',fontSize:"16px" }} id='ln'>{error.lname}</div><br />
          <input type="text" name="email" id="email" onChange={handleChange} className="form-control email" placeholder="Please Enter Your Email" value={state.email} /><div style={{color: 'red',fontSize:"16px" }} id='em'>{error.email}</div><br />
          <input type="password" name="password" id="password" onChange={handleChange} className="form-control password" placeholder="Please Enter Your Password" value={state.password} /><div style={{color: 'red',fontSize:"16px" }} id='ps'>{error.password}</div><br />
          <input type="password" name="con_password" id="con_password" onChange={handleChange} className="form-control con_password" placeholder="Please Enter Your Confirm Password" value={state.con_password} /><div style={{color: 'red',fontSize:"16px" }} id='ps_cn'>{error.con_password}</div><br />
          {/* <input type="submit" className="offset-4 btn btn-success" name="Save" /> */}
          <button className="fluid btn btn-success">Submit</button>
      </form>
      </header>
    </div>
  );
}
