import { Heading, Text, Button, Flex } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';

const EmptyState = () => (
    <DashboardShell>
        <Flex
            width="100%"
            backgroundColor="white"
            borderRadius="8px"
            p={12}
            justify="center"
            align="center"
            direction="column"
        >
            <Heading size="md" mb={2}>
                You haven't add any sites.
            </Heading>
            <Text mb={4}>Welcome, Lets get started.</Text>
            <Button fontWeight="medium" maxW="200px" variant="solid" size="md">
                Add your first site
            </Button>
        </Flex>
    </DashboardShell>
);

export default EmptyState;
