const Tranding = () => {
	return (
		<div className={`trending flex gap-2 justify-center items-center`}>
			<img
				className='w-[1.1rem]'
				src='/Images/arrowTranding.svg'
				alt='tranding arraow'
			/>
			<p className='text-xs text-trending'>Trending</p>
		</div>
	);
};

export default Tranding;
