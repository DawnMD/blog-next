const Contact = () => {
	return (
		<>
			<form>
				<div className='max-w-2xl p-4 mx-auto bg-gray-900 rounded-lg shadow-lg'>
					<div className='grid grid-cols-2 gap-y-8'>
						<label htmlFor='name' className='text-xl font-medium'>
							Name
						</label>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='Name'
							className='text-gray-800 border border-gray-500 rounded-md shadow-sm focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
						/>
						<label htmlFor='email' className='text-xl font-medium'>
							Email
						</label>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Email'
							className='text-gray-800 border border-gray-500 rounded-md shadow-sm focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
						/>
						<label htmlFor='feedback' className='text-xl font-medium'>
							Feedback
						</label>
						<textarea
							name='feedback'
							id='feedback'
							rows='5'
							placeholder='Feedback is highly aprreciated...'
							className='text-gray-800 border border-gray-500 rounded-md shadow-sm focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'></textarea>
						<button
							type='submit'
							className='col-span-2 px-3 py-2 text-xl font-semibold tracking-wide bg-purple-500 rounded-md shadow-md md:w-48 md:justify-self-center bg-gradient-to-r from-red-500 animate-gradient-x '>
							Submit
						</button>
					</div>
				</div>
			</form>
		</>
	);
};
export default Contact;
