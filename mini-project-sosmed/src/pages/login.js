import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,InputGroup,InputRightElement,  useToast, ToastPosition, Toast
  } from '@chakra-ui/react'
  import  React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2'

import axios from 'axios';



export default function Login(){

        const [show, setShow] = React.useState(false);
        const handleClick = () => setShow(!show);
        // const navigate=useNavigate();
       
        const toast = useToast();

        const defaultToastProps = {
            position: "top-right",
            duration: 5000,
            isClosable: true,
           };

        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")

        const requestLogin = async () =>{
            const isi = {email, password};
    
            if (email === '' || password === '') {
                alert('data belum disi')
            }else{
                try {
                    await axios.post('http://localhost:8000/auth/login', isi).then((res) => {
                        localStorage.setItem("token", res.data.token);
                        console.log(res.data);    
                    Swal.fire(
                            'Good job!',
                            'Berhasil login',
                            'success'
                        ).then(function(){
                            window.location = "/mainPage"
                        })
                      
                        
                        // history.push('/category');
                        
                    })
                    
                } catch (error) {
                    console.log(error);
                }
            }
        }

    return(
        <Container maxW="lg" py='60' px={{ base: '0', sm: '8' }} >
        <Stack spacing="8" borderWidth="1px" boxShadow={'2xl'}
            borderRadius="lg">
          <Stack spacing="6" >
            {/* <Logo /> */}
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center" >
              <Heading size={{ base: 'xs', md: 'sm' }} >Log in to your account</Heading>
              <HStack spacing="1" justify="center" >
                <Text color="muted">Don't have an account?</Text>
                <Button variant="link" colorScheme="blue" onClick={()=>{window.location="/register"}}>
                  Sign up
                </Button>
              </HStack>
            </Stack>
          </Stack>
          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={{ base: 'transparent', sm: 'bg-surface' }}
            boxShadow={{ base: 'none', sm: 'md' }}
            borderRadius={{ base: 'none', sm: 'xl' }}
            
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                
                  <FormLabel htmlFor="email">Email or Username</FormLabel>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                 
                  
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                    <Input type={show ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
                    <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                    </InputRightElement>
                    </InputGroup>

                </FormControl>
                {/* <PasswordField /> */}
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Button variant="link" colorScheme="blue" size="sm">
                  Forgot password?
                </Button> 
              </HStack>
              <Stack spacing="6">
                <Button variant="primary" onClick={requestLogin}
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>Sign in</Button>
               
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>  
    )
}