import { Box, Button, Container, Flex, FormControl, Heading, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../lib/auth"
import axios from 'axios'

function Login() {
    const [getEmail, setEmail] = useState("")
    const [getPassword, setPassword] = useState("")
    const [validLogin, setValidLogin] = useState(null)
    const { userHasAuthenticated } = useAuthContext()
    const nav = useNavigate()

    const submitLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`http://localhost:3300/login`, {
                email: getEmail,
                password: getPassword
            })

            const data = response.data

            if (data.status) {

                userHasAuthenticated(true)
                setValidLogin(true)
                console.log()
                nav("/")
            }

        } catch (error) {
            console.log('error: ', error)
            const data = error.response.data

            if (!data.status) {
                setValidLogin(false)
            }

        }
    }

    return (
        <Box h={"100%"} w={"100%"} maxHeight="100vh">
            <Container as={Flex} alignItems="center" justifyContent="center" maxW={"container.sm"} h={"100%"}>
                <Box minW={"448px"} bg={"white"} boxShadow="1em 1em 10px rgba(0, 0, 0, 0.1), 0.5em 0.5em 10px rgba(255, 0, 0, 0.2)" p="2em 1em">
                    <Heading>Login</Heading>
                    <Flex onSubmit={submitLogin} as={"form"} mt="1em" flexDirection="column" style={{ gap: "1em" }}>
                        <FormControl>
                            <Input id="email" type={"email"} placeholder="Email" value={getEmail} onChange={(e) => setEmail(e.target.value)} />
                            {validLogin === false && (
                                <span style={{ color: 'red' }}>Email salah!</span>
                            )}
                        </FormControl>
                        <FormControl>
                            <Input id="password" type={"password"} placeholder="Password" value={getPassword} onChange={(e) => setPassword(e.target.value)} />
                            {validLogin === false && (
                                <span style={{ color: 'red' }}>Password salah!</span>
                            )}
                        </FormControl>
                        <Button type='submit' maxWidth={"224px"}>Login</Button>
                    </Flex>
                    <Text mt={3}>Doesnt have account? <Link to={"/register"}>register</Link></Text>
                </Box>
            </Container>
        </Box>
    )
}

export default Login