
import "./Surfer.css"

import { useNavigate } from "react-router-dom";
import {SurferProps} from "../../interfaces";

function Surfer ({path, destiny} :SurferProps) {

    const navigate = useNavigate()

    return (
        <div className="surfer-design" onClick={()=>navigate(path)}>
            {destiny}
        </div>
    )
}

export default Surfer;