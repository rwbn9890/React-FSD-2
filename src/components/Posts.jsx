import React, { useState } from 'react';
import { dummyApi } from '../redux_rtk/dummyReducer/dummyApi';
import Card from './Card';
import Pagination from './Pagination';
import Search from './Search';

const Posts = () => {
    const [page, setPage] = useState({p:1, s:0})
    const {data, isLoading, error} = dummyApi.useAllRecipeQuery({endpoint:"posts", limit:8, skip:page.s})

 console.log(data)
             
    if( isLoading){
        return (<h1>Loading...</h1>)
    }else if(error){
        return (<h1>something went wrong...</h1>)
    } else{
     return (
        <div className='flex flex-col justify-between h-full'>
               <Search placeholder="posts"/>
        <div>
            {
                data?.posts.map((ele) => (
                    <Card key={ele.id} id={ele.id} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL51_W7wGkMgVb89aa7bqZ25gkU-gPATjisQ&s" name={ele.title} />
                ))
            }
        </div>
       <Pagination page={page} setPage={setPage}/>
        </div>
    );
}
 
   
}

export default Posts;
