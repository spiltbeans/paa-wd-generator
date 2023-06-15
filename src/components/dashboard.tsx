'use client'
import dynamic from 'next/dynamic'
import {
	Button,
	Box,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	IconButton,
	ButtonGroup,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	ModalBody,
} from "@chakra-ui/react"

import {
	EditIcon,
	DownloadIcon
} from "@chakra-ui/icons"

import { ChangeEvent } from 'react'

const Generate = dynamic(() => import('./Generate'))
const ClientTable = dynamic(() => import('./ClientInfo'))
const TemplateTable = dynamic(() => import('./Templates'))


const Dashboard = () => {
	const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure()
	const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
		const fileInput = e.target;

		if (!fileInput.files) {
			console.warn("no file was chosen");
			return;
		}

		if (!fileInput.files || fileInput.files.length === 0) {
			console.warn("files list is empty");
			return;
		}

		const file = fileInput.files[0];

		const formData = new FormData();
		formData.append("file", file);

		try {
			const res = fetch("/api/xlsx", {
				method: "POST",
				body: formData,
			}).then(res => {
				if (res.ok) onModalClose()
			})
		} catch (error) {
			console.error("something went wrong, check your console.");
		}

		/** Reset file input */
		e.target.type = "text";
		e.target.type = "file";
	}
	return (
		<Box w={'100%'} h={'80vh'} p={10} border={'1px'} borderColor={'grey'} borderRadius={8.5}>
			<Tabs size='md' variant='enclosed' w="100%" h={'100%'}>
				<TabList>
					<Tab>Generate</Tab>
					<Tab>Client Info</Tab>
					<Tab>Templates</Tab>
				</TabList>
				<TabPanels h={'100%'}>
					<TabPanel h={'100%'}>
						<Generate />
					</TabPanel>
					<TabPanel h={'100%'}>
						<ButtonGroup paddingBlock={5}>
							<Button variant={'outline'} onClick={onModalOpen} >
								Upload
							</Button>
							<IconButton variant={'outline'} aria-label={'edit contact information'} icon={<EditIcon />} />
							<IconButton variant={'outline'} aria-label={'download contact information'} icon={<DownloadIcon />} />
						</ButtonGroup>
						<ClientTable />
						<Modal isOpen={isModalOpen} onClose={onModalClose}>
							<ModalOverlay />
							<ModalContent h={'300px'}>
								<ModalCloseButton />
								<ModalBody display={'flex'}>
									<input className={'mx-auto my-auto'} type='file' onChange={handleFileUpload}></input>
								</ModalBody>
							</ModalContent>
						</Modal>
					</TabPanel>
					<TabPanel>
						<TemplateTable />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	)
}

export default Dashboard