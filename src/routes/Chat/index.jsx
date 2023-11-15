import Input from '../../components/Input';
import MessageContainer from '../../components/MessageContainer';
import SimpleButton from '../../components/SimpleButton';
import './styles.css';


export default function Chat() {
    return(
        <div class="container">
            <div class="chatbox">
                <div class="chat-title">
                    <h1>
                        Atendimento on-line
                    </h1>
                </div>
                <div id="chat-body">
                    <MessageContainer sender="Atendente" text="blablablablaaosudhauishdaiusdhaisudhaiusdhaiudhiausdhaiusdahiusdahsdadihauisdhaiushdui" />
                    <MessageContainer sender="Atendente" text="blablablablaaosudhauishdaiusdhaisudhaiusdhaiudhiausdhaiusdahiusdahsdadihauisdhaiushdui" />

                    <MessageContainer sender="Você" response={false} text="blablablablaaosudhauishdaiusdhaisudhaiusdhaiudhiausdhaiusdahiusdahsdadihauisdhaiushdui" />
                    <MessageContainer sender="Você" response={false} text="blablablablaaosudhauishdaiusdhaisudhaiu" />
                </div>
                <form className='formChat' action="/">
                    <div className='chatInputContainer'>
                        <Input />
                    </div>
                    <div className='chatButtonContainer'>
                        <SimpleButton text="Enviar" />
                    </div>
                </form>
            </div>
    </div>
    )
}