import './App.css';
import { Message } from './Message/Message';

let text = 'Hello, React'

function App() {
  return (
    <div className="App">
     <Message text={text}></Message>
    </div>
  );
}

export default App;
