import { Box, Link as ChakraLink } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { Table, Td, Th, Tr } from './Table';
import Link from 'next/link';

const SiteTable = ({ sites }) => {
    return (
        <Table>
            <thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Site Link</Th>
                    <Th>Feedback Link</Th>
                    <Th>Date Added</Th>
                    <Th>{''}</Th>
                </Tr>
            </thead>
            <tbody>
                {sites.map((site) => (
                    <Box as='tr' key={site.id}>
                        <Td fontWeight='medium'>{site.site}</Td>
                        <Td>{site.link}</Td>
                        <Td>
                            <Link href={`/p/${site.id}`}>
                                <ChakraLink
                                    fontWeight='medium'
                                    color='blue.500'
                                >
                                    View Feedback
                                </ChakraLink>
                            </Link>
                        </Td>
                        <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td>
                    </Box>
                ))}
            </tbody>
        </Table>
    );
};

export default SiteTable;
