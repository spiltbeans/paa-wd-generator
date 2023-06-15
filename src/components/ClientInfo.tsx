'use client'
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
} from "@chakra-ui/react"

type ClientInfo = {
	billing: string,
	contact: string,
	retainer: number | null,
	template: string
}
const clients = new Map<string, ClientInfo>([
	["PAA Inc.", {
		billing: "Michael Von Herff",
		contact: "220 Laurier Street",
		retainer: 2000,
		template: "this template"
	}]
])

const ClientTable = () => {
	return (
		<TableContainer>
			<Table variant='simple'>
				<Thead>
					<Tr>
						<Th>Sheet Name</Th>
						<Th>Billing Name</Th>
						<Th>Contact Name</Th>
						<Th>Retainer Amount</Th>
						<Th>Template</Th>
					</Tr>
				</Thead>
				<Tbody>
					{
						[...clients].map(client => (
							<Tr key={client[0]}>
								<Td>{client[0]}</Td>
								<Td>{client[1].billing}</Td>
								<Td>{client[1].contact}</Td>
								<Td>{client[1].retainer}</Td>
								<Td>{client[1].template}</Td>
							</Tr>
						))
					}
				</Tbody>
			</Table>
		</TableContainer>
	)
}


export default ClientTable