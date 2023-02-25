import "./post.css"
import { Link } from "react-router-dom"

const Main = () =>{
    return(
        
        <div id="head">
    
        <div id="inmain">
        <img id = "main" src="./image/photo-15.avif" alt="dsh"></img>
        </div>
        <div id="middle">
            <h1 id="clone">LIVEOPSENGINE</h1>
            <div id="a">
             <Link  id="start" to="/login">Start</Link>
             </div>
        </div>
        
        </div>
    )
}

export default Main