import React,{useState} from 'react'


//RULE 

export default function TextForm() {
    const [text,setText]=useState("");
    const hendleOnChange=(event)=>{
        let NewText =event.target.value
        setText(NewText);
    }

    const handleOnClick=(event)=>{
        let newText=text.toUpperCase()
        setText(newText);
    }
    

    const handleClick=(event)=>{
      let newText=text.toLowerCase()
      setText(newText);
  }
  const handlecleartext=(event)=>{
    setText("");
}
  

  return (
    <div>
      <div className="mb-3">
        <h1>Enter Your Text Here</h1>
        <textarea 
        value={text}
        className="form-control"
        onChange={hendleOnChange} 
        id="exampleFormControlTextarea1" 
        rows="3"></textarea>
    </div>
        <button onClick={handleOnClick} className='btn btn-primary' >Change to UpperCase</button>
        <button onClick={handleClick} className='btn btn-primary m-3'>Change to LowerCase</button>
        <button onClick={handlecleartext} className='btn btn-outline-danger m-3'>Chear text</button>
        <hr/>
        <div className='p-3'>
           <h2>Your text summary</h2>
        </div>
        <p> Your text contains :{text.split(" ").length-1} words and {text.length}:characters</p>
        <hr/>
        <h1> priview Text</h1>
        <p>{text}</p>
    </div>
  )
}
