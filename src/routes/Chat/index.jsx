import Input from '../../components/Input';
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
                    <div class="chat-content">
                        <h4>Atendente diz:</h4>
                        <div class="message">
                            blablablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </div>
                    </div>
                    <div class="chat-content">
                        <h4>Atendente diz:</h4>
                        <div class="message">
                            blablablablaaosudhauishdaiusdhaisudhaiusdhaiudhiausdhaiusdahiusdahsdadihauisdhaiushdui
                        </div>
                    </div>

                    <div class="chat-content response">
                        <h4>Você diz:</h4>
                        <div class="message response">
                            blablablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </div>
                    </div>
                    <div class="chat-content response">
                        <h4>Você diz:</h4>
                        <div class="message response">
                            blablablablaaosudhauishdaiusdhaisudhaiusdhaiudhiausdhaiusdahiusdahsdadihauisdhaiushdui
                        </div>
                    </div>
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