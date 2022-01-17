import loading from '../img/puff.svg'
import {Loader} from './style';

export function Loading(){
    return(
        <Loader>
            <img className='loader' src={loading} alt="loading"/>
        </Loader>
    )
}