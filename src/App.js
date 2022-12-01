
import React,{useState} from "react";
import Search from './components/Search';
import Result from './components/Result';

const name = require('@rstacruz/startup-name-generator');
const App=()=>{
    
  const [setSearchBoxText] = useState("");
  const [result, setResult] = useState([]);

  const handleChange=(inputText)=>
  {
    if(inputText.length>0)
    {
      setResult(name(inputText));
    }
    else
    {
      setResult([]);
    } 
    setSearchBoxText(inputText);
  }
  
    return(<div className="App">
      <h2> Namify </h2>
      <h4>Get unlimited number of catchy names for your next venture or start-up!</h4>
      <Search handleChange={handleChange}/>
      <Result result={result} />
    </div>)
  
}
export default App;
