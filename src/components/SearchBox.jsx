import React from "react";

const SearchBox = () => {
	return (
		<div className='card w-[70dvw] h-[7.5rem] m-auto  p-4 bg-slate-200 flex flex-wrap justify-center content-between drop-shadow-2xl '>
			<div className='relative w-fit border rounded-lg opacity-50 bg-white shadow-md '>
				<input
					type='text'
					placeholder='Search....'
					className='pl-10 w-[37.375rem] h-12 pr-4 placeholder-bg-slate-900  py-2 border-none rounded-lg bg-transparent '
				/>
				<div className='absolute top-[.5rem] right-3'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'>
						<path
							d='M22 22L20 20M11.5 21C12.7476 21 13.9829 20.7543 15.1355 20.2769C16.2881 19.7994 17.3354 19.0997 18.2175 18.2175C19.0997 17.3354 19.7994 16.2881 20.2769 15.1355C20.7543 13.9829 21 12.7476 21 11.5C21 10.2524 20.7543 9.0171 20.2769 7.86451C19.7994 6.71191 19.0997 5.66464 18.2175 4.78249C17.3354 3.90033 16.2881 3.20056 15.1355 2.72314C13.9829 2.24572 12.7476 2 11.5 2C8.98044 2 6.56408 3.00089 4.78249 4.78249C3.00089 6.56408 2 8.98044 2 11.5C2 14.0196 3.00089 16.4359 4.78249 18.2175C6.56408 19.9991 8.98044 21 11.5 21Z'
							stroke='#0A3055'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
			</div>

			<button className='btn w-[7.125rem;] h-[2.875rem] border-none  mr- rounded-md bg-[#FF6666] text-white flex justify-between'>
				Add
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='22'
					height='22'
					viewBox='0 0 22 22'
					fill='none'>
					<path
						d='M7.3335 11H14.6668'
						stroke='white'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M11 14.6654V7.33203'
						stroke='white'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M8.25016 20.1654H13.7502C18.3335 20.1654 20.1668 18.332 20.1668 13.7487V8.2487C20.1668 3.66536 18.3335 1.83203 13.7502 1.83203H8.25016C3.66683 1.83203 1.8335 3.66536 1.8335 8.2487V13.7487C1.8335 18.332 3.66683 20.1654 8.25016 20.1654Z'
						stroke='white'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</button>
		</div>
	);
};

export default SearchBox;
