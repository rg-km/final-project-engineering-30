import { Box, Container, Heading, Text, Flex } from "@chakra-ui/react";
import "./App.css"

function App() {
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ipsum pulvinar dictumst adipiscing et, augue phasellus id sapien.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
