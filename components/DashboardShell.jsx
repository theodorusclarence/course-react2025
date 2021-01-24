import { useAuth } from '@/lib/auth';
import {
    Flex,
    Link,
    Stack,
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Button,
} from '@chakra-ui/react';
import AddSiteModal from './AddSiteModal';
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
                    <LogoIcon color='black' boxSize='24px' />
                    <Link>Sites</Link>
                    <Link>Feedback</Link>
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
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink>Sites</BreadcrumbLink>
                        </BreadcrumbItem>
                        <Flex justify='space-between'>
                            <Heading mb={4}>My Sites</Heading>
                            <AddSiteModal>+ Add Site</AddSiteModal>
                        </Flex>
                    </Breadcrumb>
                    {children}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default DashboardShell;
