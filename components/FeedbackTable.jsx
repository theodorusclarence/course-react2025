import { Box, Code, IconButton, Switch } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { Table, Td, Th, Tr } from './Table';
import RemoveButton from './RemoveButton';

export default function FeedbackTable({ allFeedback }) {
    return (
        <Table>
            <thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Feedback</Th>
                    <Th>Route</Th>
                    <Th>Visible</Th>
                    <Th>{''}</Th>
                </Tr>
            </thead>
            <tbody>
                {allFeedback.map((feedback) => (
                    <Box as='tr' key={feedback.id}>
                        <Td fontWeight='medium'>{feedback.author}</Td>
                        <Td>{feedback.text}</Td>
                        <Td>
                            <Code>{`/`}</Code>
                        </Td>
                        <Td>
                            <Switch
                                variantColor='green'
                                defaultChecked={feedback.status === 'active'}
                            />
                        </Td>
                        <Td>
                            <RemoveButton feedbackId={feedback.id} />
                        </Td>
                    </Box>
                ))}
            </tbody>
        </Table>
    );
}
