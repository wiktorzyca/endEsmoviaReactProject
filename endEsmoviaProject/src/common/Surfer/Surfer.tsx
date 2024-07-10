
import "./Surfer.css"

import { useNavigate } from "react-router-dom";

function Surfer ({path, destiny}) {

    const navigate = useNavigate()

    return (
        <div className="surfer-design" onClick={()=>navigate(path)}>
            {destiny}
        </div>
    )
}

export default Surfer;