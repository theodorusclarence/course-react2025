import { Heading, Text, Button, Flex } from '@chakra-ui/react';
import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
    <Flex
        width='100%'
        backgroundColor='white'
        borderRadius='8px'
        p={12}
        justify='center'
        align='center'
        direction='column'
    >
        <Heading size='lg' mb={2}>
            You haven't add any sites.
        </Heading>
        <Text mb={4}>Lets get started.</Text>
        <AddSiteModal>Add Your First Site</AddSiteModal>
    </Flex>
);

export default EmptyState;
