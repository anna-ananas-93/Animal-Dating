import React, {useState} from "react"
import ReactCardFlip from 'react-card-flip'; // isFlipped and flipDirection is used in the component


function Animal(props) {

    const [isFlipped, SetisFlipped] = useState(false); //Declare a new state variable called isFlipped. We initialize it to false(passing false as the state argument). UseState is a hook. 

    return (
        
        <div className="contact-card" >
            <button onClick = {() => props.updateIndex()}> Not a match ! </button> {/*onClick is an arrow function, but we don't need it since we are not passing any parameter from the child to the parent.*/} 

                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    
                    <div className ="front-img-with-text">
                        <img src={props.animal.img}  onMouseOver={() => SetisFlipped(prevState => ({ isFlipped: !prevState.isFlipped }))}  /> 
                        <h2 className ="name">{props.animal.name} </h2>
                        <h2 className ="presentation">Presentation: {props.animal.presentation}</h2>
                    </div>

                    <div className = "back">
                        <h2 className = "party-trick" onMouseOut = {() => SetisFlipped(false)}>Party trick: {props.animal.trick} </h2>
                    </div>

            </ReactCardFlip>

        </div>
    )
    }

export default Animal