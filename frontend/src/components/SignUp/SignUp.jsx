import './SignUp.css';
import HeadingComp from './HeadingComp';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [Inputs, setInputs] = useState({email:"",username:"", password:""}); 
    const history = useNavigate();

    const change = (e) => {
        const {name, value} = e.target;
        setInputs({...Inputs, [name]:value})
    }

    const submit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post(`http://localhost:3001/user/signUp`, Inputs);
          
          if(response.data.message === "User Already Exists"){
            alert(response.data.message);
          }else{
            alert(response.data.message);
            history('/signIn')
          }
          setInputs({ email: "", username: "", password: "" });
        } catch (error) {
          console.error('Error during signup:', error);
          if (error.response) {
            alert(error.response.data.message);
          } else {
            console.error('Error message:', error.message);
          }
        }
      };

    return <div className='signup'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 column'> 
                    <div className='d-flex flex-column p-5 w-100'>
                        <input className='p-2 my-3 input-signup' value={Inputs.email} onChange={change} name='email' type='eamil' placeholder='Enter the mail' />
                        <input className='p-2 my-3 input-signup' value={Inputs.username} onChange={change} name='username' type='username' placeholder='Enter the username' />
                        <input className='p-2 my-3 input-signup' value={Inputs.password} onChange={change} name='password' type='password' placeholder='Enter the password' />
                        <button className='btn-signup' onClick={submit}>SignUp</button>
                    </div>
                </div>
                <HeadingComp first="Sign" second="Up" />
            </div>
        </div>
    </div>
}
export default SignUp