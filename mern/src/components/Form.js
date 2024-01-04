import React, { useState } from 'react'
 
export default function
    (prop) {
        //function for uppercase click button
        const upperCaseClick =()=>{
            let newtext = text.toUpperCase();
            setText(newtext);
        }
        
        const lowerCaseClick =()=>{
            let newtext = text.toLowerCase();
            setText(newtext);
        }
        const clear =()=>{
            let newtext = "";
            setText(newtext);
        }
        const inputChange = (event)=>{
            setText(event.target.value)
        }
        const firstLetterUpp = ()=>{
          let newtext = text;
          let finalSentence = newtext.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
          setText(finalSentence);
        }

        const [text, setText] = useState('');
        //this is the use state hook here value is updated using set text function
    return (
        
        <>
        <div className="container ">
            <h1>{prop.heading}</h1>
                <div className="form-group my-3">
                    <textarea className="form-control" id="mybox" onChange={inputChange} value={text} rows="8" placeholder='Enter The Text'></textarea>
                    <button className='btn btn-primary my-3 mx-2' onClick={upperCaseClick} >UPPERCASE</button>
                    <button className='btn btn-danger btn-rounded my-3 mx-2' onClick={lowerCaseClick} >lowecase</button>
                    <button className='btn btn-primary btn-rounded my-3 mx-2' onClick={firstLetterUpp} >Upper Case</button>
                    <button className='btn btn-danger btn-rounded my-3 mx-2' onClick={clear} >Clear</button>
                    
                </div>
        </div>
        <div className="container" my-2 >
            <h1>Text Details</h1>
           
            <p>{text.split(" ").length} words and {text.length} Characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes To Read</p>
            <h3>Your Text</h3>
            <p>{text}</p>
        </div>
        <div class="container">

</div>
        </>
    )
}
