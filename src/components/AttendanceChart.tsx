"use client"

import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// #region Sample data
const data = [
    {
        name: 'Mon',
        present: 60,
        absent: 40,
    },
    {
        name: 'Tue',
        present: 70,
        absent: 30,
    },
    {
        name: 'Wed',
        present: 75,
        absent: 25,
    },
    {
        name: 'Thu',
        present: 89,
        absent: 11,
    },
    {
        name: 'Fri',
        present: 76,
        absent: 24,
    },
];


const AttendanceChart = () => {
    return (
        <div className='bg-white rounded-lg p-4 h-full'>
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold '>Attendance</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart width={500} height={300} data={data} barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                    <XAxis dataKey="name" axisLine={false} tick={{fill: '#919295'}} tickLine={false}/>
                    <YAxis width="auto" axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
                    <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop: "20px", paddingBottom:"40px"}}/>
                    <Bar 
                        dataKey="present" 
                        fill="#94d186" 
                        radius={[10, 10, 0, 0]}
                        legendType='circle' />
                    <Bar 
                        dataKey="absent" 
                        fill="#e28078" 
                        radius={[10, 10, 0, 0]}
                        legendType='circle' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart
