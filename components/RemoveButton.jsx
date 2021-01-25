import { useAuth } from '@/lib/auth';
import { deleteFeedback } from '@/lib/db';
import { DeleteIcon } from '@chakra-ui/icons';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    IconButton,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { mutate } from 'swr';

export default function RemoveButton({ feedbackId }) {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = useRef();
    const auth = useAuth();

    const onDeleteFeedback = () => {
        deleteFeedback(feedbackId);
        mutate(
            ['/api/feedback', auth.user.token],
            async (data) => {
                return {
                    feedback: data.feedback.filter(
                        (fb) => fb.id !== feedbackId
                    ),
                };
            },
            false
        );
        onClose();
    };

    return (
        <>
            <IconButton
                aria-label='Delete feedback'
                icon={<DeleteIcon />}
                variant='ghost'
                onClick={() => setIsOpen(true)}
            />

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Feedback
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button
                                colorScheme='red'
                                onClick={onDeleteFeedback}
                                ml={3}
                            >
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}
