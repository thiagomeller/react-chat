import "./styles.css"

const MessageContainer = ({sender, text, response=true}) => {
    return(
        <>{response ? (
            <div class="chat-content">
                <h4>{sender} diz:</h4>
                <div class="message">{text}</div>
            </div>
        ): (
            <div class="chat-content response">
                <h4>{sender} diz:</h4>
                <div class="message response">{text}</div>
            </div>
        )
            }
        </>
    )
}

export default MessageContainer;