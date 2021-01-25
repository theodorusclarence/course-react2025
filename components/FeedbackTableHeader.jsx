import {
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
} from '@chakra-ui/react';

export default function FeedbackTableHeader() {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink>Feedback</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Flex justify='space-between'>
                <Heading mb={4}>My Feedback</Heading>
            </Flex>
        </>
    );
}
