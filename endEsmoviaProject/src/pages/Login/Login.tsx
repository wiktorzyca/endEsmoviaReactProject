import React, {useContext, useState} from 'react';
import "./Login.css"
import {myContext} from "../../app/context"
import checkE from "../../utils/validator";
import { LoginMe } from "../../services/api-calls";
import CInput from "../../common/CInput/CInput";
import {Credencials, CredencialsErrors, CredencialsResult} from "../../interfaces";
const Login = () => {
    const {state, SetAuth} = useContext(myContext)

    const [credentials, setCredentials] = useState<Credencials>({
        name: "",
        password: "",
    });

    const [credentialsErrors, setCredentialsErrors] = useState<CredencialsErrors>({
        nameError: "",
        passwordError: "",
    });

    const inputHandler = (e) => {
        setCredentials((prevState: Credencials) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const errorCheck = (e) => {
        let error = "";

        error = checkE(e.target.name, e.target.value);

        setCredentialsErrors((prevState: CredencialsErrors) => ({
            ...prevState,
            [e.target.name + "Error"]: error,
        }));
    };

    const loginFunction = async () => {
        LoginMe(credentials)
            .then((res :CredencialsResult) => {
                SetAuth("token", res.token)
                // SetAuth("name", res.username)

            })
            .catch(error => console.log(error))
    };
    return (
        <div className="login-design">
            <CInput
                type="text"
                name="name"
                placeholder=""
                design={`${
                    credentialsErrors.nameError !== "" ? "error-input" : ""
                } basic-input`}
                emitFunction={inputHandler}
                errorCheck={errorCheck}
            />
            {credentialsErrors.nameError}
            <CInput
                type="password"
                name="password"
                placeholder=""
                design={`${
                    credentialsErrors.passwordError !== "" ? "error-input" : ""
                } basic-input`}
                emitFunction={inputHandler}
                errorCheck={errorCheck}
            />

            {credentialsErrors.passwordError}
            {credentials.name !== "" &&
            credentials.password !== "" &&
            credentialsErrors.nameError === "" &&
            credentialsErrors.passwordError === "" && (
                <div className="login-button-design" onClick={loginFunction}>
                    Login me!
                </div>
            )}
        </div>
    );
};

export default Login;