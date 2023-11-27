import React from "react";

const Category = ({ props }) => {
	return (
		<>
			<div
				className={`CategoryTag px-3 py-1 bg-category max-w-max rounded-full flex items-center`}>
				<p className=' uppercase  text-[10px] text-center text-catText tracking-wider'>
					{props.text}
				</p>
			</div>
		</>
	);
};

export default Category;
