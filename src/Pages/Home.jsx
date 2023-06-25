import { Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Skeleton, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlog } from '../Redux/Home/actions'
import { store } from '../Redux/store'
import { Link } from 'react-router-dom'
import BlogCard from '../Components/BlogCard'

import { SearchIcon } from '@chakra-ui/icons';



const Home = () => {

    const [search,setSearch]=useState("")

  

    const [page,setPage]=useState(1)

    const  handleSearch =()=>
    {
      setPage(1)
      dispatch(getBlog(page,search))
    }

    const {isLoading,isError,blog}=useSelector((store)=>store.BlogReducer)

    const dispatch=useDispatch()

    useEffect(()=>
    {
      dispatch(getBlog(page,search))
    },[page])

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
      <Box>
       <Box w={["80%","80%","60%","50%","40%"]} m="auto" mt="20px">
       

      <InputGroup >
      <Input onChange={(e)=>setSearch(e.target.value)} value={search}  fontSize={"25px"} p={"25px"}
        pr='4.5rem'
        placeholder='Search By Title'
      />
      <InputRightElement width='4.5rem' >
        <Button h='1.75rem' onClick={handleSearch} bg={"none"} _hover={{bg:"none"}} mt={"10px"}>
           <SearchIcon color="gray.300" w="50" h="30"/>
        </Button>
      </InputRightElement>
    </InputGroup>
         
       </Box>

      <Box spacing={4}  display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} >
        {blog.map((post) => (
        //   <Box key={post.id} borderWidth="1px" borderRadius="md" p={4}>
        //    <Link to={`/post/${post.id}`}> <Heading as="h2" size="lg" mb={2}>
        //       {post.title}
        //     </Heading></Link>
        //     <Text>{post.body}</Text>
        //   </Box>
          <BlogCard title={post.title} userId={post.userId} body={post.body}  id={post.id}/>
       
        ))}
      </Box>
    
       <Flex gap={"10px"} justifyContent={"center"} m={"30px"}>
         <Button isDisabled={page==1} onClick={()=>setPage(page-1)} colorScheme='blue'>Previous</Button>
         <Button onClick={()=>setPage(page+1)} colorScheme='blue' isDisabled={blog.length!==9}>Next</Button>
        </Flex>  

        
       
      </Box>
    
    </>
  )
}

export default Home