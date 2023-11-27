import React from "react";

const TableRow = (props) => {
	const { id, full_name, icon, email, contact_no, role } = props;
	return (
		<>
			<div
				key={id}
				className='tableRow flex items-center justify-around rounded-t-lg py-6 px-4 w-[1200px] pl-7 border-b'>
				<div className=' flex items-center gap-4 w-[15%] '>
					<img className='rounded-full  border  h-8' src={`${icon}`} alt='' />
					<p className=' font-medium text-sm text-black'>{full_name}</p>
				</div>
				<div className='gap-4 flex w-[15%]'>
					<p className=' font-medium text-sm text-black'> {email}</p>
				</div>
				<div className={` w-[13%] `}>
					<p className=' font-medium text-sm text-black'>{contact_no}</p>
				</div>
				<p className='font-medium text-sm text-black w-[10%]'>{role}</p>
				<button className='btn btn-natural  font-medium text-sm text-[yellow] w-[11%]'>
					Active
				</button>

				<div className='font-medium text-sm text-black w-[21%] flex gap-2 justify-center items-center'>
					<button className='btn btn-primary text-white'>View</button>
					<button className='btn bg-red-400 text-white'>Edit</button>
					<button className=''>
						<img src='../../public/images/DeleteSvg.svg' alt='' />
					</button>
				</div>
			</div>
		</>
	);
};

export default TableRow;
