import { useAuth } from '@/lib/auth';
import {
    Flex,
    Link,
    Stack,
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading
} from '@chakra-ui/react';
import { LogoIcon } from './iconCreate';

const DashboardShell = ({ children }) => {
    const auth = useAuth();
    return (
        <Flex flexDirection="column">
            <Flex justifyContent="space-between" m={4} py={4} px={8}>
                <Stack
                    spacing={4}
                    justifyContent="flex-start"
                    isInline
                    alignItems="center"
                >
                    <LogoIcon color="black" boxSize="24px" />
                    <Link>Sites</Link>
                    <Link>Feedback</Link>
                </Stack>
                <Stack spacing={4} isInline alignItems="center">
                    <Link>Account</Link>
                    <Avatar size="sm" src={auth.user.photoUrl} />
                </Stack>
            </Flex>
            <Flex backgroundColor="gray.50" p={8} height="100vh">
                <Flex
                    direction="column"
                    w="100%"
                    maxWidth={800}
                    ml="auto"
                    mr="auto"
                >
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink>Sites</BreadcrumbLink>
                        </BreadcrumbItem>
                        <Heading mb={4}>Sites</Heading>
                    </Breadcrumb>
                    {children}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default DashboardShell;
