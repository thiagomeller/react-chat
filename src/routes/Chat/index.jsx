import { useState } from 'react';
import Input from '../../components/Input';
import MessageContainer from '../../components/MessageContainer';
import SimpleButton from '../../components/SimpleButton';
import './styles.css';


export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    function addMessage(event) {
        event.preventDefault();
    
        const form = event.currentTarget;
        const formData = new FormData(form);
        if (formData.get("newMessageContent") !== "") {
          // objeto que representa nosso novo item
          const newMessage = {
            id: generateId(),
            content: formData.get("newMessageContent")
          };
    
          // mantando os itens já cadastrados e adicionando o novo no final
          setMessages([...messages, newMessage]);
    
          // resetando o form e apagando mensagens de erro antigas
          form.reset();
          setErrorMessage("");
        } else {
          setErrorMessage("Preencha!");
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

                    <MessageContainer sender="Você" response={false} text="blablablablaaosudhauishdaiusdhaisudhaiusdhaiudhiausdhaiusdahiusdahsdadihauisdhaiushdui" />
                    <MessageContainer sender="Você" response={false} text="blablablablaaosudhauishdaiusdhaisudhaiu" />
                    {messages.map(message =>(
                        <MessageContainer sender="Você" response={false} text={message.content}/>
                    ))}
                </div>
                <form id="newMessageContent" onSubmit={addMessage} method='get' className='formChat' action="/">
                    <div className='chatInputContainer'>
                        <Input id="newMessageContent" />
                    </div>
                    <div className='chatButtonContainer'>
                        <SimpleButton id="newMessageContent" text="Enviar" type="submit"/>
                    </div>
                </form>
            </div>
    </div>
    )
}