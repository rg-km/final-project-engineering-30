import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <Box as="footer" w="100%" p={'1em'} textAlign='center'>
            <Text fontWeight={400} fontFamily='mono'>© 2000 - Company, Inc. All rights reserved. Address Address</Text>
            <Box as="nav" display={'flex'} gap="1em" margin={'auto'} w='fit-content'>
                <Link to={'#'}>Item 1</Link>
                <Link to={'#'}>Item 2</Link>
                <Link to={'#'}>Item 3</Link>
            </Box>
        </Box>
    )
}