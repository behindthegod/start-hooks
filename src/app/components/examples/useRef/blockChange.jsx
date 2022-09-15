import React, {useRef, useState} from 'react';
import Divider from "../../common/divider";

const BlockChange = () => {
    const blockRef = useRef();
    const [text, setText] = useState("блок");
    const handleClick = () => {

        blockRef.current.style.height = "150px"
        blockRef.current.style.width = "80px"
        setText('text')
    }
    return (
        <>
            <div>
                Изменене блока
            </div>
            <Divider/>
            <div className='bg-primary'
                 ref={blockRef}
                 style={{color: "red", width: "100px", height: "100px"}}>
                {text}
            </div>
            <button onChange={handleClick}>Клик</button>
        </>
    );
};

export default BlockChange;