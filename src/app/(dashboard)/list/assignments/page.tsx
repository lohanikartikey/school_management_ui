import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, assignmentsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
}

const columns = [
  {
    header: "Subject", 
    accessor: "subject"
  },
  {
    header: "Class", 
    accessor: "class", 
    // className: "hidden md:table-cell"
  },
  {
    header: "Teacher", 
    accessor: "teacher", 
    className: "hidden lg:table-cell"
  },
  {
    header: "Due Date", 
    accessor: "dueDate", 
    // className: "hidden md:table-cell"
  },
  {
    header: "Actions", 
    accessor: "actions", 
  },

]

const AssignmentList = () => {

  const renderRow = (item:Assignment) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
        <h3 className="font-semibold">{item.subject}</h3>
        </div>
      </td>
      <td>{item.class}</td>
      <td className="hidden lg:table-cell">{item.teacher}</td>
      <td>{item.dueDate}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href = {`list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center bg-lamaSky rounded-full">
              <Image src="/edit.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role ==="admin" && (
            <button className="w-7 h-7 flex items-center justify-center bg-lamaPurple rounded-full">
            <Image src="/delete.png" alt="" width={16} height={16} />
          </button>
          )}
        </div>
      </td>
    </tr>
  )

  return (
    <div className="bg-white rounded-md p-4 flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Assignments</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="bg-lamaYellow rounded-full w-8 h-8 flex justify-center items-center">
              <Image src="/filter.png" alt="" width={14} height={14}/>
            </button>
            <button className="bg-lamaYellow rounded-full w-8 h-8 flex justify-center items-center">
              <Image src="/sort.png" alt="" width={14} height={14}/>
            </button>
            {role === "admin" && (<button className="bg-lamaYellow rounded-full w-8 h-8 flex justify-center items-center">
              <Image src="/plus.png" alt="" width={14} height={14}/>
            </button>)}
          </div>
        </div>
      </div>

      {/* LIST */}
      <div className="">
        <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
      </div>

      {/* PAGIINATION */}
      <Pagination />
    </div>
  )
}

export default AssignmentList
