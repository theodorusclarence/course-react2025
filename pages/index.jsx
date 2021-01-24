import { Button, Flex, Text } from '@chakra-ui/react';
import { useAuth } from '../lib/auth';
import { LogoIcon } from '../components/iconCreate';
import Head from 'next/head';
import FreePlanEmptyState from '@/components/FreePlanEmptyState';

export default function Home() {
    const auth = useAuth();
    return (
        <Flex
            as='main'
            direction='column'
            align='center'
            justify='center'
            h='100vh'
        >
            <Head>
                <title>Fast Feedback</title>
            </Head>
            <LogoIcon color='black' boxSize='64px' />
            {auth?.user ? (
                <Button onClick={() => auth.signout()}>Sign Out</Button>
            ) : (
                <Button
                    mt={4}
                    size='sm'
                    onClick={() => auth.signinWithGithub()}
                >
                    Sign In
                </Button>
            )}
            <Text>
                Current user: <code>{auth?.user?.email}</code>
            </Text>
        </Flex>
    );
}
