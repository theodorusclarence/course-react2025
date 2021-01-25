import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormLabel,
    Input,
    FormControl,
    useDisclosure,
    useToast,
    Button,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { createSite } from '@/lib/db';
import { useAuth } from '@/lib/auth';
import { mutate } from 'swr';

export default function AddSiteModal({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const auth = useAuth();
    const initialRef = useRef();
    const finalRef = useRef();
    const { register, handleSubmit } = useForm();

    const onCreateSite = ({ site, link }) => {
        const newSite = {
            authorId: auth.user.uid,
            createdAt: new Date().toISOString(),
            site,
            link,
        };

        const { id } = createSite(newSite);

        toast({
            title: 'Account created.',
            description: "We've added your site.",
            status: 'success',
            duration: 5000,
            isClosable: true,
        });
        mutate(
            ['/api/sites', auth.user.token],
            async (data) => ({
                sites: [{ id, ...newSite }, ...data.sites],
            }),
            false
        );
        onClose();
    };

    return (
        <>
            <Button
                onClick={onOpen}
                backgroundColor='gray.900'
                color='white'
                fontWeight='medium'
                _hover={{ bg: 'gray.700' }}
                _active={{
                    bg: 'gray.800',
                    transform: 'scale(0.95)',
                }}
            >
                {children}
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent as='form' onSubmit={handleSubmit(onCreateSite)}>
                    <ModalHeader fontWeight='bold'>Add Site</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>

                            <Input
                                placeholder='My Site'
                                name='site'
                                ref={(e) => {
                                    register(e, {
                                        required: true,
                                        maxLength: 80,
                                    });
                                    initialRef.current = e;
                                }}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Link</FormLabel>
                            <Input
                                placeholder='https://theodorusclarence.com'
                                name='link'
                                ref={register({
                                    required: true,
                                })}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose} mr={3} fontWeight='medium'>
                            Cancel
                        </Button>
                        <Button
                            backgroundColor='#99fffe'
                            color='#194d4c'
                            type='submit'
                        >
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
