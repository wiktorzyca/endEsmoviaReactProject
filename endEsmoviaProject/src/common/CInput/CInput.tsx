
import "./CInput.css"
import {CInputProps} from "../../interfaces";

function CInput ({type, name, placeholder, design, emitFunction, errorCheck} : CInputProps) {

    return(
        <input 
            type={type}
            name={name}
            placeholder={placeholder}
            className={design}
            onChange={(e)=>emitFunction(e)}
            onBlur={(e)=>errorCheck(e)}
        />
    )
}

export default CInput