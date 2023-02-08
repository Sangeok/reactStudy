import styles from './App.module.css';
import {useState, useEffect} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); // 비어있는 array

  const onChange = (event) => {
    setToDo(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo ==="") {
      return; // 해당 함수 작동 X
    }
    setToDo("");
    // 현재 toDos안에 존재하는 value(currentArray)와 입력받은 todo를 합친다.
    setToDos((currentArray) => [toDo, ...currentArray]);
  }

  return (
    <div className="App">
      <h1>My To Dos</h1>
      <form onSubmit={onSubmit}>
        <input onChange = {onChange} value={toDo} type="text" placeholder="Write your to do..."/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {
          toDos.map((item, i) => {
            return <li key = {i}>{item}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
