import {useState} from 'react' ; 

const Home = () => {
    const [name, setName]= useState('mario');

    const handleClick = () => {
        setName('luigi')
    }

    const handleClickAgain = (name) => {
        console.log('hello' + name)
    }

    return ( 
        <div className = "home">
            <h2>Homepage</h2>
            <p>{ name}</p>
             <button  onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;