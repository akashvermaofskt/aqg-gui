import React, { useState } from 'react';

//components
import InputForm from "./components/InputForm";
import Result from "./components/Result";

const App = () => {
  const [state,setState] = useState({Text:"",Lines:0,Summary:"",QAs:[]});
  return (
    <div className="container border border-dark mt-2 pb-3" id="main">
        <h1 className="p-5">Automatic Question Answer Generator</h1>
        <div className="row">
          <div className="col-6">
            <InputForm state={state} setState={setState}/>
          </div>
          <div className="col-6">
            <Result state={state} setState={setState}/>  
          </div>
        </div>
    </div>
  );
}

export default App;
