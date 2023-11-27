import React from "react";
import { rolesPeople } from "./data";

const Roles = () => {
	return (
		<>
			<div className='mx-w  border  rounded-t-lg mt-8 '>
				<div className=' p-4 px-7 flex justify-around rounded-[0.8125rem] border-b border-[#0A3055]   '>
					<p className='font-medium text-sm text-black w-[33.33%]  flex gap-4'>
						<img
							src='../public/images/group-1000003529.svg'
							alt='adminUpDown'
						/>
						Full Name{" "}
					</p>
					<p className='font-medium text-sm text-black w-[33.33%] flex gap-4'>
						<img
							src='../public/images/group-1000003529.svg'
							alt='adminUpDown'
						/>
						Email
					</p>
					<p className='font-medium text-sm text-black w-[33.33%] flex gap-4'>
						<img
							src='../public/images/group-1000003529.svg'
							alt='adminUpDown'
						/>
						Actions
					</p>
				</div>

				{rolesPeople.map((x) => {
					const { id, name, users } = x;
					return (
						<div key={id} className=''>
							<p className='font-medium text-sm text-black w-[33.33%] '>
								{name}
							</p>
							<p className='font-medium text-sm text-black w-[33.33%] '>
								{users}
							</p>
							<div className='font-medium text-sm text-black w-[33.33%] flex gap-2 justify-center items-center'>
								<button className='btn btn-primary text-white'>View</button>
								<button className='btn bg-red-400 text-white'>Edit</button>
								<button className=''>
									<img
										src='../../public/images/DeleteSvg.svg'
										alt='Delete Icon'
									/>
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Roles;
