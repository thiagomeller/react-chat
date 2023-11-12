import React from "react";

import Input from "../../components/Input";
import SimpleButton from "../../components/SimpleButton";

import "./styles.css"

export default function SignUp() {
    return (
        <div className="container">
            <div className="formContainer">
                <form className="form" action="/">
                    <div className="title">Log in</div>
                    <Input label="Usuário" />
                    <Input label="Senha" />
                    <div className="buttonContainer">
                        <SimpleButton 
                            text="Entrar" 
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}