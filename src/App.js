import React, {useState} from "react";
import "./style.css";

export default function App() {

const [data,setData] = useState(null);
const [print,setPrint] = useState(false);
const [body, setBody] = useState(null);

  function getData(val) {
    console.warn(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
  return (
    <div className="App">
    <h1>Impulsive Writing</h1>
    <p>Write the first thought that comes to your head. Every time you write something new, the previous text disappears.</p>
    <input id="textbox" type="text" onChange={getData} />
    <button onClick={()=>setPrint(true)} >Print Paragraph</button>
    {
       print?
       <p>{data}</p>
       :null
     }
    </div>
  );
}
