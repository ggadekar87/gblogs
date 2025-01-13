
import './codeblockcontainer.css';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import CopyAllTwoToneIcon from '@mui/icons-material/CopyAllTwoTone';
import { useState } from 'react';
export const Codeblockcontainer = (props) => {
    const [flag, setFlag] = useState(false)
    const handleOnCopy = () => {
        navigator.clipboard.writeText(props.children)
        setFlag(!flag);
        setTimeout(() => {
            setFlag(false);
        }, 1000);
    }
    return <div className='Codeblockcontainer'>
        <div className='Codeblockcontainer-data'>
            {props.children}
        </div>
        <div className='CopyBtn-cnt'>
            {props.hideCopyBtn ?
                ""
                :
                <div className='CopyBtn'>
                    <CopyAllIcon style={flag === true ? { display: "none" } : { display: "unset" }} onClick={handleOnCopy}></CopyAllIcon>
                    <CopyAllTwoToneIcon onClick={() => setFlag(!flag)} style={flag === false ? { display: "none" } : { display: "unset" }}></CopyAllTwoToneIcon>
                </div>}</div>

    </div>
}