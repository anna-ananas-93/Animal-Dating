import React from 'react';
import './Style.css';
import Animal from './Components/Animal';
import animalsData from './animalsData';
import Header from './Components/Header';

class App extends React.Component {
  
  constructor() {
      super()
      this.state = {
          isLoading: true,
          index: 0
      }   
  }

componentDidMount() { //called after render() when an instance of a component is being created and inserted into the DOM
  setTimeout(()=> { //will set isLoading to false after 3 seconds
    this.setState({ // will trigger an extra render which will happen before the browser updates the screen, 
                    //but the user won't see the intermediate state.
      isLoading: false 
    })
  }, 3000)
}

//Fisher-Yates shuffle, O(n)
shuffle(){
  let currentAnimalIndex = animalsData.length;
  let temporaryAnimal = null;
  let randomIndex = 0; 

  while (0 !== currentAnimalIndex) {

    randomIndex = Math.floor(Math.random() * currentAnimalIndex);// A random number from 0 to 8
    currentAnimalIndex -= 1; // decrement current (which starts at 8) by one

    // Animal objects at current index and random index switch places. 
    temporaryAnimal = animalsData[currentAnimalIndex]; //temporaryAnimal is assigned the object that is located at the index of current (ex. 7)
    animalsData[currentAnimalIndex] = animalsData[randomIndex]; //object at current index is assigned to the object at random index.
    animalsData[randomIndex] = temporaryAnimal; //randomIndex is assigned the object at temporaryanimal.
  }
}

updateIndex = () => { //if index is 7 , shuffle the array and set the index back to zero.
  if(this.state.index === animalsData.length-1){
    this.shuffle();
    this.setState({
      index: 0
    });
  }else{
    this.setState({
      index: this.state.index + 1
      
    });
    
  } 
}


render() {
    
    return (
      <div className = "greeting">
            {this.state.isLoading ? <h1> Welcome to the Animal Dating site</h1> : <Header/>} {/*Tenary (conditional) operator. ? truthy condition: falsy condition*/}

            <div className="contacts">  
                <Animal animal = {animalsData[this.state.index]} updateIndex = {this.updateIndex}/> {/*updateIndex is passed as a reference to the child*/}
            </div>
      </div> 
    )}

}
export default App