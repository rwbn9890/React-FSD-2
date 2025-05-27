import React, { useEffect, useState } from 'react'
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap'
import { useSearchParams } from 'react-router'
import { useLoaderData } from 'react-router-dom'
import Cards from './Cards'



const Users = () => {

    const data= useLoaderData()
    console.log(data)
    // const [data, setData] = useState([])
    //    const [loading, setLoading] = useState(true)
    //     const [error, setError] = useState(false)

    // const fetUsers = async () => {

    //     try {
    //                 const res = await fetch('https://randomuser.me/api/?results=50');
    //                 const data = await res.json()
    //                 console.log(data.results)
    //                 setData(data.results)
    //                 setLoading(false)
            
    //     } catch (error) {
    //         console.log(error)
    //         setError(true)
    //     }
    // }

    // useEffect(()=>{
    //         fetUsers()
    // }, [])



  return (
    <>
  {
    loading ? 
      <Container className='text-center my-5 py-5'>
            <Spinner animation="border" />
        </Container>
        :
        error ? 
     <Container className='text-center my-5 py-5'>
        <Alert  variant="danger">
            Something went wrong
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
        </Container>
        :
    <Container>
        <Row className='row-cols-4 g-3 justify-content-center'>
            {/* {
                data.map((ele) =>(
                    <Col>
                        <Cards {...ele}/>
                    </Col>
                ))
            } */}
          
         
        </Row>
    </Container> 
  }
    
     </>
  )
}

export default Users




  export const fetUsers = async () => {
        try {
                    const res = await fetch('https://randomuser.me/api/?results=50');
                    const sdata = await res.json()
                    // console.log(data.results)
                    // setData(data.results)
                    return sdata.results
                    // setLoading(false)
            
        } catch (error) {
            console.log(error)
            // setError(true)
        }
    }