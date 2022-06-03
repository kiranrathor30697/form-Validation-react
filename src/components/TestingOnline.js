import { useState, useEffect, useRef, useReducer } from 'react';
// import * as React from "react";
// import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import { FormValidator } from '@syncfusion/ej2-inputs';
// import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
// let formObject;
function TestingOnline() {
    // const userNameRef = useRef(null);
    // const [dateOfBirth, setDateOfBirth] = useState('');
    // const initialState = { email: '', password: '' };
    // const reducer = (state, action) => {
    //     switch (action.type) {
    //         case 'update':
    //             return { ...state, [action.field]: action.value };
    //         default:
    //             return initialState;
    //     }
    // };
    // const [state, dispatch] = useReducer(reducer, initialState);
    // const dateChangeHandler = (event) => {
    //     setDateOfBirth(event.value);
    // };
    // const update = (field) => (event) => {
    //     //update action is dispatched to update the email and password state value
    //     dispatch({ type: 'update', field, value: event.value });
    // };
    // useEffect(() => {
    //     userNameRef.current.focusIn();
    //     const options = {
    //         // validation rules
    //         rules: {
    //             email: {
    //                 required: [true, '* Please enter your email'],
    //             },
    //             password: {
    //                 required: [true, '* Please enter your password'],
    //             },
    //             date: {
    //                 required: [true, '* Please enter your date of birth'],
    //             },
    //         },
    //     };
    //     // Initialize the form validator
    //     formObject = new FormValidator('#form1', options);
    // }, []);
    // const onSubmit = () => {
    //     formObject.validate();
    //     if (formObject.validate()) {
    //         formObject.element.reset();
    //     }
    // };
    // return (<div>
    //   <div className="control_wrapper" id="control_wrapper">
    //     <h3 className="form-title">User Login</h3>
    //     <div className="control_wrapper textbox-form">
    //       <form id="form1" method="post">
    //         <div className="form-group">
    //           <input type="text" name="email" ref={userNameRef} id="email" change={update('email')} className="form-control email" placeholder="Please Enter Your Email" value={state.email} floatLabelType="Auto" data-msg-containerid="errroForEmail" />
              
    //           {/* <TextBoxComponent ref={userNameRef} type="email" name="email" value={state.email} change={update('email')} placeholder="Username" floatLabelType="Auto" data-msg-containerid="errroForEmail"/> */}
    //           <div id="errroForEmail"/>
    //         </div>
    //         <div className="form-group">
    //           <input type="password" name="password" id="password"  change={update('password')} className="form-control password" placeholder="Please Enter Your Password" value={state.password}  floatLabelType="Auto" data-msg-containerid="errroForPassword"/>
              
    //           {/* <TextBoxComponent type="password" name="password" value={state.password} change={update('password')} placeholder="Password" floatLabelType="Auto" data-msg-containerid="errroForPassword"/> */}
    //           <div id="errroForPassword"/>
    //         </div>
    //         <div className="form-group">
    //           <input type="date" name="fname" id="fname" value={dateOfBirth} change={dateChangeHandler} className="form-control fname" placeholder="Please Enter Your First Name" floatLabelType="Auto" data-msg-containerid="errroForDateOfBirth" />
              
    //           {/* <DatePickerComponent name="date" value={dateOfBirth} change={dateChangeHandler} placeholder="Date of Birth" floatLabelType="Auto" data-msg-containerid="errroForDateOfBirth"/> */}
    //           <div id="errroForDateOfBirth"/>
    //         </div>
    //       </form>
    //       <div className="submitBtn">
    //           <button  className="fluid btn btn-success">Submit</button>
    //         {/* <ButtonComponent onClick={onSubmit}>Submit</ButtonComponent> */}
    //       </div>
    //     </div>
    //     <br />
    //     <br />
    //   </div>
    // </div>);
}
export default TestingOnline;



// import React from 'react';

// export default function TestingOnline() {
//     const {
//         handleSubmit, // handles form submission
//         handleChange, // handles input changes
//         data, // access to the form data
//         errors, // includes the errors to show
//       } = useForm({ // the hook we are going to create
//         validations: { // all our validation rules go here
//           name: {
//             pattern: {
//               value: '^[A-Za-z]*$',
//               message:
//                 "You're not allowed ...",
//             },
//           },
//         },
//         onSubmit: () => alert('User submitted!'),
//         initialValues: { // used to initialize the data
//           name: 'John',
//         },
//       });
      
//       // ...
//       return (
//         <form onSubmit={handleSubmit}>
//           <input value={data.name || ''} onChange={handleChange('name')} required />
//           {errors.name && <p className="error">{errors.name}</p>}
//           {/** ... */}
//         </form>
//       );
// }
// const [data, setData] = useState(options?.initialValues || {});

//   const handleChange = (
//     key,
//     sanitizeFn,
//   ) => (e) => {
//     const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
//     setData({
//       ...data,
//       [key]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (options?.onSubmit) {
//       options.onSubmit();
//     }
//   };

//   return {
//     data,
//     handleChange,
//     handleSubmit,
//   };