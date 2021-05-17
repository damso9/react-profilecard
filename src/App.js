
import {useState} from 'react';
import './App.css';

import Header from './Header'
import Content from './Content'
import Icon from './Icon'

function App() {

    
    const [option, setOption] = useState('');
    let [num, setNum] = useState(0);
    
    const nameButton = (name) => {
        console.log("your name is " + name);
        const hiMyName = `My Name is ${name}`;
        setOption(hiMyName);
    
    } 
    const skillButton = (skill) => {
    
        const skillset = `I'm a ${skill}`
        setOption(skillset);
    
    } 
    const addClick = () => {

      let sum = num + 1;
      // let final = setNum(sum);
      setNum(sum);
      
      console.log(sum);
    }


  return (
    <div className="App">       
            <div className="container">
            <section>
                <Header nameButton={nameButton} option={option} />
                <Content nameButton={nameButton} skillButton={skillButton} addClick={addClick} num={num} />
                <Icon />
        </section>

        </div>
    </div>
  );
}

export default App;
