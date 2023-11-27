import React from "react";
import Category from "./Category";
import Tranding from "./Tranding";

const TableRow = (props) => {
	return (
		<>
			<div className='tableRow flex items-center justify-around rounded-t-lg py-6 px-4 w-[1200px] pl-7 border-b'>
				<div className=' flex items-center gap-4 w-[23%] '>
					<img
						className='rounded-full movieLogo border border-secTextCol h-8'
						src={`${props.link}`}
						alt=''
					/>
					<p className=' font-medium text-sm text-black'>{props.name}</p>
				</div>
				<div className='gap-4 flex w-[20%]'>
					<div
						className={`CategoryTag px-3 py-1 bg-category max-w-max rounded-full flex items-center`}>
						<p className=' uppercase  text-[10px] text-center text-catText tracking-wider'>
							{props.text}
						</p>
					</div>
					<Category
						text={`${props.category2}`}
						className={`${props.lastCat} `}></Category>
					<p
						className={`${props.more} moreText uppercase hidden  my-auto text-[10px] text-center text-catText tracking-wider`}>
						+2 more
					</p>
				</div>
				<div className={` w-[13%] ${props.abtTr}`}>
					<Tranding></Tranding>
				</div>
				<p className='font-medium text-sm text-black w-[11%]'>
					{props.watchlists}
				</p>
				<p className='font-medium text-sm text-black w-[11%]'>
					{props.streams}
				</p>
				<p className='font-medium text-sm text-black w-[11%]'>{props.date}</p>
				<div className='font-medium text-sm text-black w-[11%]'>
					<button className='px-4 py-2 border border-tableBoarder rounded-lg'>
						View
					</button>
				</div>
			</div>
		</>
	);
};

export default TableRow;
