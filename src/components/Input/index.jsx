import './styles.css';

export default function Input({label, type="text", id}) {
    return( 
        <div className='inputContainer'>
            <div className='label'>{label}</div>
            <input id={id} type={type} />
        </div>
    )
}