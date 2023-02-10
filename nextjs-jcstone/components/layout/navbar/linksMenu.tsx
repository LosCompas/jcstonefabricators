import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, HStack, IconButton, useDisclosure } from '@chakra-ui/react';
import React from 'react';

export default function LinksMenu(props) {

    const { links, NavLink, isOpen, onClose, onOpen } = props;
    
    return (
        <>
        <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {links.map(({name, path}) => (
                <NavLink key={path} path={path}>{name}</NavLink>
              ))}
            </HStack>
          </HStack>
        </>
    )
}
