import {
    Box,
    Divider,
    ListItem,
    List,
    ListIcon,
    Center,
    LinkBox,
    LinkOverlay
} from '@chakra-ui/layout'
import NextImage from 'next/image'
import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd
} from 'react-icons/md'

const SideBar = () => {
  return (
    <Box
        width="100%"
        height="calc(100vh - 100px)"
        bgColor="black"
        px="5px"
        color='gray'
    >

        <Box py="20px">
            <Box width="120px" mb="20px" px="20px">
                <NextImage src="/Logo.svg" width={60} height={120}  />
            </Box>
        </Box>
    </Box>
  )
}

export default SideBar