import {
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
} from '@chakra-ui/react';
import AddSiteModal from './AddSiteModal';

export default function SiteTableHeader() {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink>Sites</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Flex justify='space-between'>
                <Heading mb={4}>My Sites</Heading>
                <AddSiteModal>+ Add Site</AddSiteModal>
            </Flex>
        </>
    );
}
