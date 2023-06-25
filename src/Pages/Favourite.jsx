import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFavouriteBlog, getFavouriteBlog } from '../Redux/Favourite/actions'
import { Box, Button, Center, Flex, Heading, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Favourite = () => {

  const dispatch=useDispatch()
  useEffect(()=>
  {
    dispatch(getFavouriteBlog())
  },[])
  const {favourites}=useSelector((store)=>store.FavouriteBlogReducer)
  
  const handleRemove=(id)=>
  {
     dispatch(deleteFavouriteBlog(id))
  } 

  if(favourites.length==0)
  {
    return <Center> <Image src='https://cdn.discordapp.com/attachments/990722581189500938/1122464628308451389/no-data-found.png'/></Center>
  }

  return (
    <>
      
      <Box display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} padding={"10px"} gap={"20px"} >
          {
            favourites.map((ele)=><Box boxShadow={"2xl"} >

               <Image src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>
               <Box padding={"20px"}>
               <Heading textAlign={"center"}>{ele.auther}</Heading>
               <Heading m="20px 0px" fontSize={"xl"} >{ele.title}</Heading>
             
               <Link to={`/post/${ele.id}`}><Button colorScheme='blue'>View More</Button></Link>
               <Button ml="10px" colorScheme='blue' onClick={()=>handleRemove(ele.id)}>Remove</Button>
               </Box>
            </Box>)
          }
      </Box>
      
    </>
  )
}

export default Favourite