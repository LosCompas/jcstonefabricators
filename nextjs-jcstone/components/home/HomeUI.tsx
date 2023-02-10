import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function HomeUI() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '4xl', md: '6xl', lg: '7x1' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '10%', md: '20%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'darkred',
                zIndex: -1,
              }}>
              JC Stone
            </Text>
            <br />{' '}
            <Text color={'darkred'} as={'span'}>
              Fabrication
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.600'}>
            Over 20 years of experience allows me to bring all your stone
			ideas to reality in an efficient manner. We provide competitive
			pricing at the best quality. 
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={''}
        />
      </Flex>
    </Stack>
  );
}
