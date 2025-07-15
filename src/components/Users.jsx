import React, { useState } from 'react';
import { dummyApi } from '../redux_rtk/dummyReducer/dummyApi';
import Card from './Card';
import Pagination from './Pagination';
import Search from './Search';

const Users = () => {
      const [page, setPage] = useState({p:1, s:0})
 const {data, isLoading, error} = dummyApi.useAllRecipeQuery({endpoint:"users", limit:8, skip:page.p})
 console.log(data)
            if( isLoading){
                return (<h1>Loading...</h1>)
            }else if(error){
                return (<h1>something went wrong...</h1>)
            } else{
     return (
        <div className='flex flex-col justify-between h-full'>
              <Search placeholder="recipes"/>
            <div>
                {
                    data?.users.map((ele) => (
                        <Card key={ele.id} id={ele.id} img={ele.image} name={ele.firstName + ele.lastName} />
                    ))
                }
            </div>
             <Pagination page={page} setPage={setPage}/>
        </div>
    )}
}

export default Users;
