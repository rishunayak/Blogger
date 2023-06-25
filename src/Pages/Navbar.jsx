import { Avatar, Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} p={["10px 10px","10px 40px"]} alignItems={"center"} bg={"#f7fafc"} >
       <Box>
       <a href='/'><Avatar  size={'xl'} src='https://cdn.discordapp.com/attachments/748110251420811345/1122151654360354907/download-removebg-preview_1.png'/></a> 
       </Box>
       <Flex fontSize={"25px"} fontWeight={"600"} gap={["10px","20px","40px","40px"]} color={"teal"}>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favourites</Link>
        <Link to="#">Contact</Link>
       </Flex>

      </Flex>
    </>
  )
}

export default Navbar