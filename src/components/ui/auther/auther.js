import './auther.css'
import LinkedIn from '../../images/LinkedIn.jpg'
export const Auther = (props) => {
    return <div className='Auther'>
        <span><strong>Auther:  </strong>
           <span className='AutherName'>{props.name}</span>  ({props.email})</span>
        <span>
            <a href={props.linkedin} className="autherLink" title="Linkedin" rel="noreferrer" target="_blank">
                <img style={{ width: "100px", height: "50px" }} src={LinkedIn} title="Linkedin" />
            </a>
        </span>
    </div>
}