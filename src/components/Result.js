import React, { useEffect } from 'react';

const Result = ({state,setState}) => {

    useEffect(()=>{
        
        if(state.Summary === "")
            return

        const payload = { 
            Summary: state.Summary
        }
        fetch('http://localhost:5000/answer_list',{
            method: 'POST', 
            mode : 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        })
        .then(response => response.json())
        .then(data => {
            if(data.QAs)
                setState({...state,QAs:  data.QAs});
        });


    },[state.Summary]);

    const displayQuestions = () => { 
        if(state.QAs.length === 0 ){
            return (<li>
                Please input some text.
            </li>);
        }else{
            let i=0;
            return state.QAs.map((data)=>(
            <li key={i++}>
                <ul style={{listStyle: "none"}}>
                    <li key={data.Original_Sentence}><span className="bold">Original Sentence:</span> {data.Original_Sentence} </li>
                    <li key={data.Question}><span className="bold">Question:</span> {data.Question} </li>
                    <li key={data.Answer}><span className="bold">Answer:</span> {data.Answer} </li>
                </ul>
            </li>
            ));
        }
    };

    return (
        <div id="result">
        <h1>Result</h1>
        <div>
            <div>
                <h3>Summary</h3>
                <p>{state.Summary}</p>
            </div>
            <div>
                <h3>Questions</h3>
                <ol>
                    {displayQuestions()}
                </ol>
            </div>
        </div>
        </div>
    );
}

export default Result;
