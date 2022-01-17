import { Dashcard } from "./style";


export const Dashcards = ({text, bg}) => {

    return(
        <Dashcard>
            <div className={bg}>
                <h3>{text}</h3>
            </div>
        </Dashcard>
    )
}