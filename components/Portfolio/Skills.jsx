const Skills = () => {
	return (
		<section className='flex flex-col items-center gap-4 md:gap-6'>
			<h2 className='text-3xl font-bold tracking-wide md:text-4xl'>Skills</h2>
			<div className='h-1 mx-auto bg-purple-500 rounded-lg w-36 bg-gradient-to-r from-red-500 animate-gradient-x'></div>
			<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
				<div className='px-6 py-4 space-y-2 text-center bg-gray-900 rounded-lg shadow-lg'>
					<h4 className='text-2xl font-bold tracking-wider text-html'>HTML5</h4>
					<p className='text-lg font-medium'>Hyper Text Markup Language.</p>
				</div>
				<div className='px-6 py-4 space-y-2 text-center bg-gray-900 rounded-lg shadow-lg'>
					<h4 className='text-2xl font-bold tracking-wider text-css'>CSS3</h4>
					<p className='text-lg font-medium'>Cascading Stylesheets.</p>
				</div>
				<div className='px-6 py-4 space-y-2 text-center bg-gray-900 rounded-lg shadow-lg'>
					<h4 className='text-2xl font-bold tracking-wider text-tailwind'>
						TailwindCSS
					</h4>
					<p className='text-lg font-medium'>A utility-first CSS framework.</p>
				</div>
				<div className='px-6 py-4 space-y-2 text-center bg-gray-900 rounded-lg shadow-lg'>
					<h4 className='text-2xl font-bold tracking-wider text-react'>
						React JS
					</h4>
					<p className='text-lg font-medium'>
						A JavaScript library for building user interfaces.
					</p>
				</div>
				<div className='px-6 py-4 space-y-2 text-center bg-gray-900 rounded-lg shadow-lg'>
					<h4 className='text-2xl font-bold tracking-wider text-redux'>
						Redux
					</h4>
					<p className='text-lg font-medium'>
						A Predictable State Container for JS Apps.
					</p>
				</div>
				<div className='px-6 py-4 space-y-2 text-center bg-gray-900 rounded-lg shadow-lg'>
					<h4 className='text-2xl font-bold tracking-wider'>Next JS</h4>
					<p className='text-lg font-medium'>
						The React Framework for Production.
					</p>
				</div>
			</div>
		</section>
	);
};
export default Skills;
