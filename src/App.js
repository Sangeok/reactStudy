import Button from './otherJs/button.js';
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>Welcome!</h1>
      <Button text={"Continue"}/>
    </div>
  );
}

export default App;
