import { useState } from 'react';
import Input from '../../components/Input';
import MessageContainer from '../../components/MessageContainer';
import SimpleButton from '../../components/SimpleButton';
import './styles.css';


export default function Chat() {
    const [messages, setMessages] = useState([]);

    function addMessage(event) {
        event.preventDefault();
    
        const form = event.currentTarget;
        const formData = new FormData(form);
        if (formData.get("newMessageContent") !== "") {

            const newMessage = {
                id: messages.length +1,
                content: formData.get("newMessageContent")
            };

          setMessages([...messages, newMessage]);
    
          form.reset();
        }
      }
      
    return(
        <div className="container">
            <div className="chatbox">
                <div className="chat-title">
                    <h1>
                        Atendimento on-line
                    </h1>
                </div>
                <div id="chat-body">
                    <MessageContainer sender="Atendente" text="blablablablaaosudhauishdaiusdhaisudhaiusdhaiudhiausdhaiusdahiusdahsdadihauisdhaiushdui" />
                    <MessageContainer sender="Atendente" text="blablablablaaosudhauishdaiusdhaisudhaiusdhaiudhiausdhaiusdahiusdahsdadihauisdhaiushdui" />

                    <MessageContainer sender="Você" response={false} text="blablablablaaosudhauishdaiusdhaisudhaiu" />
                    {messages.map(message =>(
                        <div key={message.id}>
                            <MessageContainer sender="Você" response={false} text={message.content} />
                        </div>
                    ))}
                </div>
                <form id="newMessageContent" onSubmit={addMessage} method='get' className='formChat'>
                    <div className='chatInputContainer'>
                        <Input id="newMessageContent" name='newMessageContent' />
                    </div>
                    <div className='chatButtonContainer'>
                        <SimpleButton id="newMessageContent" text="Enviar" type="submit"/>
                    </div>
                </form>
            </div>
    </div>
    )
}