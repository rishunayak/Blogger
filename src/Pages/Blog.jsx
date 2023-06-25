import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getCurrentBlog } from '../Redux/Blog/actions'
import axios from 'axios'
import { Avatar, Box, Button, Flex, Heading, Skeleton, Stack, Text } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"
import AutherProfile from '../Components/AutherProfile'
import { postFavouriteBlog } from '../Redux/Favourite/actions'

const Blog = () => {

    const {isError,isLoading,currentBlog}=useSelector((store)=>store.CurrentBlogReducer)
    const {favourites}=useSelector((store)=>store.FavouriteBlogReducer)
    const dispatch=useDispatch()
    const {id}=useParams()
    const [fav,setFav]=useState(false)
    const [auther,setAuther]=useState([])
    const [comments,setComments]=useState([])
    
    useEffect(()=>
    {
       dispatch(getCurrentBlog(id))

    },[])
    
    useEffect(()=>
    {

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${currentBlog.id}`).then((r)=>setComments(r.data))
        axios.get(`https://jsonplaceholder.typicode.com/users?id=${currentBlog.userId}`).then((r)=>setAuther(r.data[0]))
    },[currentBlog])

   
   const handleSave=()=>
   {
       dispatch(postFavouriteBlog({id:currentBlog?.id,title:currentBlog?.title,auther:auther?.name}))
       setFav(true)
   }

   if(isLoading)
   {
    return <Stack>
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
  </Stack>
   }
    
  return (
    <>
      <Flex justifyContent={"space-between"} p={"0px 10px"} m={"20px"}>
        <Box>
        <Link to={"/"}><Button><ChevronLeftIcon w="30" h={"30"}/> Back</Button></Link> 
        </Box>
        <Box>
         {fav?  <Button bg={"none"} _hover={{bg:"none"}}> <AiFillHeart color='red' size={"35"}/></Button>  : <Button onClick={handleSave} bg={"none"} _hover={{bg:"none"}}> <AiOutlineHeart color='red' size={"35"}/> </Button> } 
        </Box>
      </Flex>


     
     
    
      <Box  borderRadius={"16px"} >

        <Heading textAlign={"center"} p={"20px"}>{currentBlog.title}</Heading>
        <Box padding={"20px"}>
        <Heading fontSize={"2xl"} m={"30px 0px"}>Auther :- {auther?.name}  <AutherProfile name={auther?.name} email={auther?.email} username={auther?.username} phone={auther?.phone} city={auther?.address?.city} company={auther?.company?.name}/></Heading>
        
        <Text fontSize={"20px"}>{currentBlog.body}</Text></Box>

        <Box bg={"#f4f4f4"} padding={"20px"}>
            <Heading ml="10px" pt="20px" fontSize={"2xl"}>{comments?.length} Comment</Heading>

            {comments?.map((ele)=> <Box borderBottom={"1px solid #9a9a9a"} padding={"10px"}>
            
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{ele.name}  </Text>
            <Text color={'gray.500'}>{ele.email}</Text>
          </Stack>
        </Stack>
            <Text ml="20px" mt="20px">{ele.body}</Text>
            </Box> )}
        </Box>
      </Box>
 
    </>
  )
}

export default Blog