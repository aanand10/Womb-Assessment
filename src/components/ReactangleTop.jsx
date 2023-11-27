import React from "react";

const ReactangleTop = ({ Page }) => {
	return (
		<div className='card w-[70dvw] h-[10rem] p-4 m-auto  bg-slate-200 flex bg-[url(./public/images/admin-img.png)] bg-cover '>
			<div className='card w-[65dvw] h-[10rem] bg-gradient-to-r from-white-500 z-10'>
				<h2 className=' text-4xl text-[#0A3055] leading-7 font-bold '>
					{Page}
				</h2>

				<div className='mr-auto mt-5 flex gap-4  items-center '>
					<p className=' text-base text-[#0A3055] font-medium leading-5  '>
						Dashboard
					</p>
					<span className='flex gap-4 justify-center items-center  text-[#0A3055]'>
						<svg
							width='6'
							height='6'
							viewBox='0 0 6 6'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<circle cx='3' cy='3' r='3' fill='#0A3055' />
						</svg>
						{Page}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ReactangleTop;
