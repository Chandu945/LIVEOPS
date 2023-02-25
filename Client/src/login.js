import "./post.css"
import { useState } from "react"
import NormalHeader from "./normalhead"
import { useNavigate } from "react-router-dom"

const Login = () =>{
    const [data , updatelogin] = useState({email:"" , password:""})
    const [msg , updatemsg] = useState()
    const naviagte = useNavigate()
    const handlelogin = async () =>{
        const formdata = new FormData()
        formdata.append("email", data.email)
        formdata.append("password", data.password)
        const response = await fetch("http://localhost:8080/api/v1/login", {
          method: 'POST',
          body: formdata
        })
        const resp = await response.json()
        if(resp.status === "failure"){
            updatemsg(<div className="msg2">user not exists</div>)
        }else if(resp.status === "failure2"){
            updatemsg(<div className="msg2">Incorrect Password</div>)
        }else{
            naviagte("/main")
        }
    }
const handle = () =>{
       naviagte("/register")
}

    return(
        <section className="form2">
        <NormalHeader/>
        <div className="loginform">
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter your email" value={data.email} onChange={(e) => {updatelogin({ ...data, email: e.target.value }) }} id="email" name="email" className="enter" ></input>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter your password" value={data.password} onChange={(e) => { updatelogin({ ...data, password: e.target.value }) }} id="password" name="password" className="enter"></input>       
        <button className="btn" onClick={handlelogin} id="login">LOGIN</button>
        {msg}
        <button className="btn" onClick={handle} id="des" >Don't have an account? Register</button>
        </div>
        </section>
    )
}

export default Login