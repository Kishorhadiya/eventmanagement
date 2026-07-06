import React from 'react'
import "./PostCategory.css";
import userdata from './userlistdata';
import { MdDeleteSweep } from "react-icons/md";

function PostCategory  () {
  return (
        <>

        <form>

        <input type="text" placeholder='Category name*' className='input-data'/><br></br>
        <button type="submit" className='btn'>Post</button>
        </form>

         <table className='sk-table'>
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {userdata.map((category,index)=>{
               return(<>
               <tr key={category.id}>
                  <td>{index+1}</td>
                  <td>
                    <img src={category.profile} alt="" className='category-img'/>
                  </td>
                  <td>{category.name}</td>
                  <td><MdDeleteSweep size={30} className='btn-delete' /></td>
               </tr>
               
               </>)
              })}
            </tbody>
         </table>


        </>

     
  )
}

export default PostCategory;
