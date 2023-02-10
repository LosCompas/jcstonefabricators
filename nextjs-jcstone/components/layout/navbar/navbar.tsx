import { ReactNode } from 'react';
import {
  Box,
  Flex,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import Link from 'next/link'
import AvatarMenu from './avatarMenu';
import LinksMenu from './linksMenu';

const Links = [
	{name: 'Home', path: '/'},
	{name: 'Projects', path: '/about/projects'},
	{name: 'About', path: '/about'}
];

const NavLink = ({ children, path }: { children: ReactNode, path: string }) => (
  	<Box
	 	  px={2}
    	py={1}
    	rounded={'md'}
    	_hover={{
    		textDecoration: 'none',
      	bg: useColorModeValue('darkred', 'red.700'),
      }}>
		<Link href={path}> {children} </Link>
	</Box>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('#DEB887', '#DEB887')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <LinksMenu 
            links={Links} 
            NavLink={NavLink} 
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}/>
          <Flex alignItems={'center'}>
                <AvatarMenu NavLink={NavLink}/>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(({name, path}) => (
                <NavLink key={path} path={path}>{name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
