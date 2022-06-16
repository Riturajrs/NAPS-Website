import { Table } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { pastmembers } from "../../team";

const years = Object.keys(pastmembers);
export default function PastTeam() {
	const [year, setYear] = useState(years[0]);
	return (
		<div className="lg:mx-20 sm:mx-12 min-h-screen">
			<select
				onClick={(e: any) => {
					setYear(e.target.value);
				}}
				className="mb-4 block appearance-none w-max border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ml-auto">
				{years.map((y) => {
					return <option key={y}>{y}</option>;
				})}
			</select>
			<Table hoverable={true}>
				<Table.Head>
					<Table.HeadCell>Name</Table.HeadCell>
					<Table.HeadCell>Designation</Table.HeadCell>
					<Table.HeadCell>LinkedIn</Table.HeadCell>
				</Table.Head>
				<Table.Body className="divide-y">
					{pastmembers[year].map((member) => {
						return (
							<Table.Row
								className="bg-white"
								key={member.name + member.post}>
								<Table.Cell className="font-medium text-gray-900">
									{member.name}
								</Table.Cell>
								<Table.Cell>{member.post}</Table.Cell>
								<Table.Cell className="text-blue-500">
									<Link href={member.linkedin}>Link</Link>
								</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table>
		</div>
	);
}
