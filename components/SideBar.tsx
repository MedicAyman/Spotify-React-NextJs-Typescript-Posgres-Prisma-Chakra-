import {
	Box,
	Divider,
	ListItem,
	List,
	ListIcon,
	Center,
	LinkBox,
	LinkOverlay
} from '@chakra-ui/layout';
import NextImage from 'next/image';
import {
	MdHome,
	MdSearch,
	MdLibraryMusic,
	MdPlaylistAdd
} from 'react-icons/md';
import NextLink from 'next/link'
const navMenu = [
	{
		name: 'Home',
		icon: MdHome,
		route: '/'
	},
	{
		name: 'Search',
		icon: MdSearch,
		route: '/search'
	},
	{
		name: 'Your Library',
		icon: MdLibraryMusic,
		route: '/library'
	}
];
const SideBar = () => {
	return (
		<Box
			width="100%"
			height="calc(100vh - 100px)"
			bgColor="black"
			px="5px"
			color="gray"
		>
			<Box py="20px">
				<Box width="120px" mb="20px" px="20px">
					<NextImage src="/Logo.svg" width={60} height={120} />
				</Box>
                <Box marginBottom="20px">
                    <List spacing={2}>
                        {navMenu.map(menu => (
                            <ListItem px="20px" fontSize="16px" key={menu.name}>
                                <LinkBox>
                                    <NextLink href={menu.route} passHref>
                                        <LinkOverlay>
                                            <ListIcon as={menu.icon} color="white" marginRight='20px' />
                                            {menu.name}
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
			</Box>
		</Box>
	);
};

export default SideBar;
