import { useAuth } from '@/lib/auth';
import Link from 'next/link';
import {
    Flex,
    Link as ChakraLink,
    Stack,
    Avatar,
    Button,
} from '@chakra-ui/react';
import { LogoIcon } from './iconCreate';

const DashboardShell = ({ children }) => {
    const { user, signout } = useAuth();
    return (
        <Flex flexDirection='column'>
            <Flex justifyContent='space-between' m={4} py={4} px={8}>
                <Stack
                    spacing={4}
                    justifyContent='flex-start'
                    isInline
                    alignItems='center'
                >
                    <Link href='/'>
                        <ChakraLink>
                            <LogoIcon color='black' boxSize='24px' />
                        </ChakraLink>
                    </Link>
                    <Link href='/dashboard'>
                        <ChakraLink>Sites</ChakraLink>
                    </Link>
                    <Link href='/feedback'>
                        <ChakraLink>Feedback</ChakraLink>
                    </Link>
                </Stack>
                <Stack spacing={4} isInline alignItems='center'>
                    {user && (
                        <Button
                            variant='ghost'
                            mr={2}
                            onClick={() => signout()}
                        >
                            Log Out
                        </Button>
                    )}
                    <Avatar size='sm' src={user?.photoUrl} />
                </Stack>
            </Flex>
            <Flex backgroundColor='gray.50' p={8} minH='100vh'>
                <Flex
                    direction='column'
                    w='100%'
                    maxWidth={800}
                    ml='auto'
                    mr='auto'
                >
                    {children}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default DashboardShell;
