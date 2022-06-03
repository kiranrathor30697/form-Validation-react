import '../App.css'

function Validation() {
  //1.hook Area


  //2.Function Defination

  let handleKeyUp = (e)=>{
    // console.log(e.target.value);
      //console.log("okok");
        let getValue = e.target.value;

        let fname = document.getElementById('fname');
        let lname = document.getElementById('lname');
        let email = document.getElementById('email');
        let password = document.getElementById('password');
        let con_password = document.getElementById('con_password');
      
        let fn = document.getElementById('fn');
        let ln = document.getElementById('ln');
        let em = document.getElementById('em');
        let ps = document.getElementById('ps');
        let ps_cn = document.getElementById('ps_cn');

        if((fname.value) !== ""){
            fn.innerHTML="";
        }else if(fname.value == ""){
            fn.innerHTML = "Please Enter your First Name";
        }if(lname.value !== ""){
            ln.innerHTML = "";
        }else{
            ln.innerHTML = "Please Enter your Last Name";
        }if(email.value !== ""){
            em.innerHTML = "";
        }else{
            em.innerHTML = "Please Enter your Email Address";
        }if(password.value !== ""){
            ps.innerHTML = "";
        }else{
            ps.innerHTML = "Please Enter your Password";
        }if(con_password.value !== ""){   
            ps_cn.innerHTML = "";
            if(password.value == con_password.value ){
                console.log("matched");
                ps_cn.innerHTML = "";
            }else{
                console.log("not matched");
                ps_cn.innerHTML = "This Password is not Match";
            }
        }else{
            ps_cn.innerHTML = "Please Enter your Confirm Password";
        }
    }

  let handleClick =(e)=>{
    e.preventDefault();

        let fname = document.getElementById('fname');
        let lname = document.getElementById('lname');
        let email = document.getElementById('email');
        let password = document.getElementById('password');
        let con_password = document.getElementById('con_password');


            let fn = document.getElementById('fn');
            let ln = document.getElementById('ln');
            let em = document.getElementById('em');
            let ps = document.getElementById('ps');
            let ps_cn = document.getElementById('ps_cn');

        // console.log(fname.value)
        if(((fname.value) && (lname.value) && (email.value) && (password.value) && (con_password.value)) == ""){
            if((fname.value) !== ""){
                fn.innerHTML="";
            }else{
                fn.innerHTML = "Please Enter your First Name";
            }if(lname.value !== ""){
                ln.innerHTML = "";
            }else{
                ln.innerHTML = "Please Enter your Last Name";
            }if(email.value !== ""){
                em.innerHTML = "";
            }else{
                em.innerHTML = "Please Enter your Email Address";
            }if(password.value !== ""){
                ps.innerHTML = "";
            }else{
                ps.innerHTML = "Please Enter your Password";
            }if(con_password.value !== ""){   
                ps_cn.innerHTML = "";
            }else{
                ps_cn.innerHTML = "Please Enter your Confirm Password";
            }
            
        }
    }


  //3. Return Statement
  return (
    <div className="App">
      <header className="App-header">
        <form className="offSet-1 w-25 border p-3 mt-5" onSubmit={()=>{}}>
          <h4 className='text-white'>Form Validation</h4>
          <input type="text" name="fname" id="fname" onKeyUp={handleKeyUp} className="form-control" placeholder="Please Enter Your First Name" /><div style={{color: 'red',fontSize:"16px" }} id='fn'></div><br />
          <input type="text" name="lname" id="lname" onKeyUp={handleKeyUp} className="form-control" placeholder="Please Enter Your Last Name" /><div style={{color: 'red',fontSize:"16px" }} id='ln'></div><br />
          <input type="email" name="email" id="email" onKeyUp={handleKeyUp} className="form-control" placeholder="Please Enter Your Email" /><div style={{color: 'red',fontSize:"16px" }} id='em'></div><br />
          <input type="password" name="password" id="password" onKeyUp={handleKeyUp} className="form-control" placeholder="Please Enter Your Password" /><div style={{color: 'red',fontSize:"16px" }} id='ps'></div><br />
          <input type="password" name="con_password" id="con_password" onKeyUp={handleKeyUp} className="form-control" placeholder="Please Enter Your Confirm Password" /><div style={{color: 'red',fontSize:"16px" }} id='ps_cn'></div><br />
          {/* <input type="radio" className="" name="gender" />
          <label htmlFor="gender">Female</label><br />
          <input type="radio" className="" name="gender" />
          <label htmlFor="gender">Male</label><br /><br /> */}
          <input type="submit" className="offset-4 btn btn-success" onClick={handleClick} name="Save" />
      </form>
      </header>
    </div>
  );
}

export default Validation;
