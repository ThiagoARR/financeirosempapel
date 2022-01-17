import { useEffect, useState } from 'react';
import { Message } from './style';

export function Messages({type,msg}){
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!msg){
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() =>{
            setVisible(false)  
        }, 3000)
        
        return () => clearTimeout(timer)
    },[msg])
    return (<>{visible && (<Message className={type}>{msg}</Message>)}
            </>
        )
}