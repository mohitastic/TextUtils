import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUppercaseClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChangeText = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    // const handleOnClickTextArea = ()=>{
    //     setText("");
    // }

    const handleLowercaseClick = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }
    const [text,setText] = useState('Enter text here');
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnChangeText} id="myBox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUppercaseClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowercaseClick}>Convert to Lowercase</button>
    </div>

    <div className="container my-3">
        <h1>Your Text summary</h1>
        <p>{text.length!=0 ? text.split(" ").length : 0} words, and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes it will take you to read it.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
