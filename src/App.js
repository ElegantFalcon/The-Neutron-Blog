import './App.css';
import Navbar from './Navbar'


function App() {
  return (
    <div className='App'>
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked {likes} times</p>
        <p>{10}</p>
        <p>{"Hello ninjas"}</p>
        <p>{[1,2,3,4]}</p>
        <p>{Math.random()}</p>

        <a></a>
      </div>
    </div>

  );
}

export default App;
