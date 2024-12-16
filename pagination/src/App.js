import './App.css';
import react,{useState,useEffect} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './Pagination';
function App() {
  const [data,setData]=useState([])
  const [perPage,setPerpage]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{setData(response.data)})
  })
  const pageHandler=(pageNumber)=>{
    setPerpage(data.slice((pageNumber*10)-10,pageNumber*10))
  }
  return (
    <div>
      {data.length>=1?
      <div>
        {perPage.map(post=><li className='p-2 m-3 fs-5 w-50'>{post.title}</li>)} <br/>
      <Pagination data={data} pageHandler={pageHandler}/>
      </div>:<p>Data Not Loaded</p>}
    </div>
  );
}
export default App;
