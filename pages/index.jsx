import { Button, Flex, Link, Text } from '@chakra-ui/react';
import { useAuth } from '../lib/auth';
import { LogoIcon } from '../components/iconCreate';
import Head from 'next/head';

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
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                                window.location.href = "/dashboard"
                            }
                            `,
                    }}
                />
                <title>Fast Feedback</title>
            </Head>
            <LogoIcon color='black' boxSize='42px' mb={2} />
            <Text mb={4}>
                <Text as='span' fontWeight='bold' display='inline'>
                    Fast Feedback
                </Text>
                {' is being built as part of '}
                <Link
                    href='https://react2025.com'
                    isExternal
                    textDecoration='underline'
                >
                    React 2025
                </Link>
                {`. It's the easiest way to add comments or reviews to your static site. It's still a work-in-progress, but you can try it out by logging in.`}
            </Text>
            {auth?.user ? (
                <Button
                    as='a'
                    href='/dashboard'
                    backgroundColor='gray.900'
                    color='white'
                    fontWeight='medium'
                    mt={4}
                    maxW='200px'
                    _hover={{ bg: 'gray.700' }}
                    _active={{
                        bg: 'gray.800',
                        transform: 'scale(0.95)',
                    }}
                >
                    View Dashboard
                </Button>
            ) : (
                <Button
                    mt={4}
                    size='sm'
                    onClick={() => auth.signinWithGithub()}
                >
                    Sign In
                </Button>
            )}
        </Flex>
    );
}
