import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { adminPeople } from "./data";
import TableRow from "./components/TableRow";
const Admin = () => {
	return (
		<>
			<div className='mx-w  border  rounded-t-lg mt-8 '>
				<div className=' p-4 px-7 flex justify-around rounded-[0.8125rem] border-b border-[#0A3055]   '>
					<p className='font-medium text-sm text-black w-[15%]  flex gap-4'>
						<img
							src='../public/images/group-1000003529.svg'
							alt='adminUpDown'
						/>
						Full Name{" "}
					</p>
					<p className='font-medium text-sm text-black w-[15%] flex gap-4'>
						<img
							src='../public/images/group-1000003529.svg'
							alt='adminUpDown'
						/>
						Email
					</p>
					<p className='font-medium text-sm text-black w-[13%] flex gap-4'>
						<img
							src='../public/images/group-1000003529.svg'
							alt='adminUpDown'
						/>
						Contact No
					</p>
					<p className='font-medium text-sm text-black w-[10%] flex gap-4'>
						<img
							src='../public/images/group-1000003529.svg'
							alt='adminUpDown'
						/>
						Role
					</p>
					<p className='font-medium text-sm text-black w-[15%] flex gap-4'>
						<img
							src='../public/images/group-1000003529.svg'
							alt='adminUpDown'
						/>
						Status
					</p>
					<p className='font-medium text-sm text-black w-[21%] flex gap-4'>
						<img
							src='../public/images/group-1000003529.svg'
							alt='adminUpDown'
						/>
						Action
					</p>
				</div>

				{adminPeople.map((x) => {
					const { id, full_name, icon, email, contact_no, role } = x;
					return <TableRow {...x}></TableRow>;
				})}
			</div>
		</>
	);
};

export default Admin;
