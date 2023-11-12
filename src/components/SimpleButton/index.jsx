import { Link } from "react-router-dom";
import "./styles.css";

export default function SimpleButton({text, type}) {
    return(
        <Link className="button" to="/chat">
            <button  className="button" type={type}>
                {text}
            </button>
        </Link>
    )
}