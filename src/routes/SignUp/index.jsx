import React from "react";

import Input from "../../components/Input";
import SimpleButton from "../../components/SimpleButton";

import "./styles.css"
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <div className="container">
            <div className="formContainer">
                <form className="form" action="/">
                    <div className="title">Log in</div>
                    <Input label="Usuário" />
                    <Input label="Senha" type="password" />
                    <div className="buttonContainer">
                        <Link className="button" to="/chat">
                            <SimpleButton 
                                text="Entrar" 
                                type="submit"
                            />
                        </ Link>
                    </div>
                </form>
            </div>
        </div>
    )
}