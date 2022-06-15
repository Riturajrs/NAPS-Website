import { Table } from "flowbite-react"
import Link from "next/link"
import { pastmembers } from "../../team"

const members = pastmembers
export default function PastTeam(){
  return (
    <div className="lg:mx-20 sm:mx-12 min-h-screen">
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>
            Name
          </Table.HeadCell>
          <Table.HeadCell>
            Designation
          </Table.HeadCell>
          <Table.HeadCell>
            Year
          </Table.HeadCell>
          <Table.HeadCell>
            LinkedIn
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {members.map((member)=>{
            return (
          <Table.Row className="bg-white" key={member.name + member.post + member.year}>
            <Table.Cell className="font-medium text-gray-900">
            {member.name}
            </Table.Cell>
            <Table.Cell>
            {member.post}
            </Table.Cell>
            <Table.Cell>
            {member.year}
            </Table.Cell>
            <Table.Cell className="text-blue-500">
            <Link href={member.linkedin}>Link</Link>
            </Table.Cell>
          </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}