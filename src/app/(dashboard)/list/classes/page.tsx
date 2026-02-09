import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, classesData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: string;
  supervisor: string;
}

const columns = [
  {
    header: "Class Name", 
    accessor: "name"
  },
  {
    header: "Capacity", 
    accessor: "capacity", 
    className: "hidden md:table-cell"
  },
  {
    header: "Grade", 
    accessor: "grade", 
    className: "hidden lg:table-cell"
  },
  {
    header: "Supervisor", 
    accessor: "supervisor", 
    className: "hidden lg:table-cell"
  },
  {
    header: "Actions", 
    accessor: "actions", 
  },

]

const ClassList = () => {

  const renderRow = (item:Class) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
        <h3 className="font-semibold">{item.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden lg:table-cell">{item.grade}</td>
      <td className="hidden lg:table-cell">{item.supervisor}</td>
      <td>
        <div className="flex items-center gap-2">
          {role ==="admin" && (
            <>
              <FormModal table="class" type="update" data={item}/>
              <FormModal table="class" type="delete" id={item.id}/>
            </>
          )}
        </div>
      </td>
    </tr>
  )

  return (
    <div className="bg-white rounded-md p-4 flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="bg-lamaYellow rounded-full w-8 h-8 flex justify-center items-center">
              <Image src="/filter.png" alt="" width={14} height={14}/>
            </button>
            <button className="bg-lamaYellow rounded-full w-8 h-8 flex justify-center items-center">
              <Image src="/sort.png" alt="" width={14} height={14}/>
            </button>
            {role === "admin" && (
              <FormModal table="class" type="create"/>
            )}
          </div>
        </div>
      </div>

      {/* LIST */}
      <div className="">
        <Table columns={columns} renderRow={renderRow} data={classesData} />
      </div>

      {/* PAGIINATION */}
      <Pagination />
    </div>
  )
}

export default ClassList
