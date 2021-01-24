import { Box, Link } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { Table, Td, Th, Tr } from './Table';

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
                {console.log(sites)}
                {sites.map((site) => (
                    <Box as='tr' key={site.link}>
                        <Td fontWeight='medium'>{site.site}</Td>
                        <Td>{site.link}</Td>
                        <Td>
                            <Link>View Feedback</Link>
                        </Td>
                        <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td>
                    </Box>
                ))}
            </tbody>
        </Table>
    );
};

export default SiteTable;
