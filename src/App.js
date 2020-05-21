import React, { useState } from 'react';

//components
import InputForm from "./components/InputForm";
import Result from "./components/Result";

const App = () => {
  const [state,setState] = useState({Text:"",Lines:0,Summary:"",QAs:[{Original_Sentence:"This is a sentence.",Question:"This is a Question",Answer:"This is an answer"}]});
  return (
    <div id="main">
        <InputForm state={state} setState={setState}/>
        <Result state={state} setState={setState}/>  
    </div>
  );
}

export default App;
