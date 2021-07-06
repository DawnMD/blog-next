import { useState } from 'react';
const Contact = () => {
	const [formResult, setFormResult] = useState();
	const onFormSubmit = async (event) => {
		event.preventDefault();
		const form = event.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				setFormResult('ok');
			} else {
				setFormResult('error');
			}
		};
		xhr.send(data);
	};
	return (
		<>
			<form
				onSubmit={(event) => onFormSubmit(event)}
				method='POST'
				action='https://formspree.io/f/xwkwaaaw'>
				<div className='max-w-2xl p-4 mx-auto bg-gray-300 rounded-lg shadow-lg dark:bg-gray-900'>
					{!formResult && (
						<div className='grid grid-cols-2 gap-y-8'>
							<label htmlFor='name' className='text-xl font-medium'>
								Name
							</label>
							<input
								type='text'
								name='name'
								id='name'
								placeholder='Name'
								className='text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
								required
							/>
							<label htmlFor='email' className='text-xl font-medium'>
								Email
							</label>
							<input
								type='email'
								name='email'
								id='email'
								placeholder='Email'
								className='text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
								required
							/>
							<label htmlFor='feedback' className='text-xl font-medium'>
								Feedback
							</label>
							<textarea
								name='feedback'
								id='feedback'
								rows='5'
								placeholder='Feedback is highly aprreciated...'
								className='text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
								required></textarea>
							<button
								type='submit'
								className='col-span-2 px-3 py-2 text-xl font-bold tracking-wide bg-purple-500 rounded-md shadow-md md:w-48 md:justify-self-center bg-gradient-to-r from-red-500 animate-gradient-x '>
								Submit
							</button>
						</div>
					)}
					{formResult === 'error' && (
						<p>Ooops! There was an error. Try again later.</p>
					)}
					{formResult === 'ok' && (
						<p>I received your message. I&apos;ll get back to you ASAP.</p>
					)}
				</div>
			</form>
		</>
	);
};
export default Contact;
