'use state'
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	IconButton,
	TableContainer,
} from "@chakra-ui/react"

import {
	DeleteIcon,
	EditIcon,
} from "@chakra-ui/icons"
type TemplateOptions = {
	edit: boolean,
	delete: boolean
}

const templates = new Map<string, TemplateOptions>([
	['default', {
		edit: true,
		delete: false
	}],
	['PAA Inc.', {
		edit: true,
		delete: true,
	}]
])

const TemplateTable = () => {
	return (
		<TableContainer>
			<Table variant='simple'>
				<Thead>
					<Tr>
						<Th>Name</Th>
						<Th>Options</Th>
					</Tr>
				</Thead>
				<Tbody>
					{
						[...templates].map(template => (
							<Tr key={template[0]}>
								<Td>{template[0]}</Td>
								<Td className="inline-flex">
									<IconButton isDisabled={!template[1].delete} aria-label={`delete ${template[0]} template`} icon={<DeleteIcon />} />
									<IconButton isDisabled={!template[1].edit} aria-label={`edit ${template[0]} template`} icon={<EditIcon />} />
								</Td>

							</Tr>
						))
					}
				</Tbody>
			</Table>
		</TableContainer>

	)
}

export default TemplateTable