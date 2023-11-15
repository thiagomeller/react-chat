import "./styles.css"

const MessageContainer = ({sender, text, response=true}) => {
    return(
        <>{response ? (
            <div className="chat-content">
                <h4>{sender} diz:</h4>
                <div className="message">{text}</div>
            </div>
        ): (
            <div className="chat-content response">
                <h4>{sender} diz:</h4>
                <div className="message response">{text}</div>
            </div>
        )
            }
        </>
    )
}

export default MessageContainer;