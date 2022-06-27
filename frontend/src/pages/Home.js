import { Box, Container, Heading, Text, Flex } from "@chakra-ui/react";
import "./Home.css"

function Home() {
    return (
        <Box
            h={"100%"}
            maxH="100vh"
            className="App"
        >
            <Container as={Flex} maxW="container.lg" h={'100%'} alignItems='center'>
                <Box p={4} maxW="448px">
                    <Heading>Title</Heading>
                    <Text fontWeight={700} fontFamily={'mono'}>
                        Platform untuk memagement penyewaan ruang belajar bagi pelajar.
                    </Text>
                </Box>
            </Container>
        </Box>
    );
}

export default Home;