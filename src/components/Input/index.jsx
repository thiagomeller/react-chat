import './styles.css';

export default function Input({label}) {
    return( 
        <div className='inputContainer'>
            <div className='label'>{label}</div>
            <input type="text" />
        </div>
    )
}