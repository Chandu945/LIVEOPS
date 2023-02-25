import "./post.css";
import { useNavigate } from "react-router-dom";

const Header = () =>{
    const navigate = useNavigate()
    const handleform = () =>{
        navigate("/form")
    }
    return(
          <div id="viewHead">
               <div id="leftHead">
                
                <h1 id="h">LIVEOPSENGINE</h1>
               </div>
               <div>
               <h1 onClick={handleform}>ADD OFFER</h1>
               </div>
          </div>
    )
}

export default Header;