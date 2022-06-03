import React, { useState } from 'react';

export default function MyLogicFormValidat() {
    // 1.state /hook variable
 const [state, setState] = useState({
     fname: '',
     lname:'',
     email:'',
     password:'',
     con_password:''
 });
 const [error, setError] = useState({});


    //2.methods
    let handleChange = (e)=>{
        // console.log(e.target.value);
        // console.log(e.target);
        let {name,value} = e.target
        // console.log(name,value);

         setState({...state,[name]:value});
        // console.log(e.target.classList[1])

        // if(e.target.classList[1] == "fname"){
        //     setState({...state,fname:e.target.value})
        // }else if(e.target.classList[1] == "lname"){
        //     setState({...state,lname:e.target.value})
        // }else if(e.target.classList[1] == "email"){
        //     setState({...state,email:e.target.value})
        // }else if(e.target.classList[1] == "password"){
        //     setState({...state,password:e.target.value})
        // }else if(e.target.classList[1] == "con_password"){
        //     setState({...state,con_password:e.target.value})
        // }
    }

    let handleClick =(e)=>{
        e.preventDefault();
        
    }

    //3.return Statement
  return (
    <div className="App">
      <header className="App-header">
        <form className="offSet-1 w-25 border p-3 mt-5" onSubmit={()=>{}}>
          <h4 className='text-white'>Form Validation</h4>
          <input type="text" name="fname" id="fname" onChange={handleChange} className="form-control fname" placeholder="Please Enter Your First Name" value={state.fname} /><div style={{color: 'red',fontSize:"16px" }} id='fn'>{error.fname}</div><br />
          <input type="text" name="lname" id="lname" onChange={handleChange} className="form-control lname" placeholder="Please Enter Your Last Name" value={state.lname} /><div style={{color: 'red',fontSize:"16px" }} id='ln'></div><br />
          <input type="email" name="email" id="email" onChange={handleChange} className="form-control email" placeholder="Please Enter Your Email" value={state.email} /><div style={{color: 'red',fontSize:"16px" }} id='em'></div><br />
          <input type="password" name="password" id="password" onChange={handleChange} className="form-control password" placeholder="Please Enter Your Password" value={state.password} /><div style={{color: 'red',fontSize:"16px" }} id='ps'></div><br />
          <input type="password" name="con_password" id="con_password" onChange={handleChange} className="form-control con_password" placeholder="Please Enter Your Confirm Password" value={state.con_password} /><div style={{color: 'red',fontSize:"16px" }} id='ps_cn'></div><br />
          <input type="submit" className="offset-4 btn btn-success" onClick={handleClick} name="Save" />
      </form>
      </header>
    </div>
  );
}
