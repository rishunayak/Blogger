import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
  } from '@chakra-ui/react';
  import {IoMdMail} from "react-icons/io"
  import {BsTelephoneFill} from "react-icons/bs"
  
  export default function AutherProfile({phone,name,email,username,city,company}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (

      
        <>
      <Button onClick={onOpen}>View More</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Auther Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center flexDirection={"column"}>
          <Avatar
            size={'xl'}
            src={
              'https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            @{username}
          </Text>
          
          
  
         

          <Stack justifyContent={"center"} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #Blogger
            </Badge>
          </Stack>


          <Stack justifyContent={"center"} direction={'column'} mt={3}>
          <Text fontWeight={600} color={'gray.500'} >
          Company :- {company}
          </Text>
          <Text fontWeight={600} color={'gray.500'} >
           City :- {city}
          </Text>


          
          </Stack>
          </Center>
          <Stack mt={8} direction={'row'} spacing={4} justifyContent={"center"}>
          <a href={`mailto:${email}`}
         
          >  <Text 
        
       
         ><IoMdMail color='red' size={50}/> </Text></a>

          <a href={`tel:${phone}`}
        
          >   <Text 
      
      
           ><BsTelephoneFill color='green'  size={43}/> </Text></a>
          </Stack>
            

           
          </ModalBody>

          
        </ModalContent>
      </Modal>
    </>


     

      
    );
  }