import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Pagination = ({data,pageHandler}) => {
  let pageNumbers=[]
  for (let i=1;i<(data.length/10)+1;i++){
    pageNumbers.push(i)
  }
  return (
    <div>
        <center>
           {pageNumbers.map(page=><button onClick={()=>pageHandler(page)} className='p-2 m-1'>{page}</button>)}
        </center>
    </div>
  )
}
export default Pagination
