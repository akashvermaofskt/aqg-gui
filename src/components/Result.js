import React, { useEffect } from 'react';

const Result = ({state,setState}) => {

    useEffect(()=>{
        console.log(state);
        
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
            console.log(data);
            if(data.QAs)
                setState({...state,QAs:  data.QAs});
        });


    },[state.Summary]);

    const displayQuestions = () => {   
        console.log(state);
        if(state.QAs.length === 0 ){
        }else{
            let i=0;
            return state.QAs.map((data)=>(
            <li key={i++}>
                <ul style={{listStyle: "none"}}>
                    <li key={data.Original_Sentence}>Original Sentence: {data.Original_Sentence} </li>
                    <li key={data.Question}>Question: {data.Question} </li>
                    <li key={data.Answer}>Answer: {data.Answer} </li>
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
