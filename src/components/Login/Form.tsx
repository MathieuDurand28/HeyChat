import "./Form.scss"
import {Button} from "../Button/Button"
import "animate.css"

export const Form = () => {
    return (
        <div className="login-form">
            <h1 className="brand">HeyChat</h1>
            <form >
                <label className="animate__animated animate__backInRight" htmlFor="Login">Login</label>
                <input className="animate__animated animate__backInLeft" type="text" name="login" id="login" placeholder="saisissez votre adresse mail" />
                <br/>
                <label className="animate__animated animate__backInLeft" htmlFor="password">Mot de passe</label>
                <input className="animate__animated animate__backInRight" type="password" name="password" id="password" placeholder="saisissez votre mot de passe" />
                <span className="animate__animated animate__bounceIn">
                    <Button title="Se connecter" type="granted"/>
                </span>
                <p className="alternative-login animate__animated animate__backInRight " onClick={(e) => alert('Alerte ! ')}>Connexion en anonyme</p>
            </form>
        </div>
    )
}