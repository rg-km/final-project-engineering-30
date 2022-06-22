import { Box, Heading, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [navSize, setNavSize] = useState('10em')
    const [navColor, setNavColor] = useState('transparent')
    const [boxShadow, setBoxShadow] = useState('')
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavColor('white') : setNavColor('transparent')
        window.scrollY > 10 ? setNavSize('70px') : setNavSize('10em')
        window.scrollY > 10 ? setBoxShadow('0 5px 10px rgba(0, 0, 0, 0.2)') : setBoxShadow('')
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
        return () => {
            window.removeEventListener('scroll', listenScrollEvent)
        }
    }, [])

    return (
        <Box
            as="header"
            display={'flex'}
            boxShadow={boxShadow}
            justifyContent='space-between'
            alignItems={'center'}
            p={'.875em 2em'}
            bgColor={navColor}
            position='fixed'
            w={'100%'}
            h={navSize}
            transition='all .5s'
            top={0}
            zIndex='10'
        >
            <Heading as={Link} to="/" fontSize={'1.5em'}>Logo image</Heading>
            <Box>
                <Button as={Link} to="/login" bg={'transparent'}>Login</Button>
            </Box>
        </Box>
    )
}