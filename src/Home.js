import {useState} from 'react' ; 
import BlogList from './BlogList';

const Home = () => {
    const [blogs,setBlogs] = useState([
        { title :  'My new Website' , body : 'lorem ipsum...', author :'mario', id : 1},
        { title :  'Welcome party' , body : 'lorem ipsum...', author :'yoshi', id : 1},
        { title :  'Web dev top tips' , body : 'lorem ipsum...', author :'mario', id : 1},
    ]) 
    return ( 
        <div className = "home">
            <BlogList/>
             
        </div>
     );
}
 
export default Home;