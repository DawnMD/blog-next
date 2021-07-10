import { useState } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
	const [formResult, setFormResult] = useState();
	const onFormSubmit = async (event) => {
		event.preventDefault();
		const status = await emailjs.sendForm(
			process.env.EmailServiceId,
			process.env.EmailTemplateId,
			event.target,
			process.env.EmailUserId
		);
		if (status.text === 'OK') {
			setFormResult('ok');
		} else {
			setFormResult('error');
		}
	};
	return (
		<>
			<form onSubmit={onFormSubmit}>
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
						<p className='text-xl font-medium text-center'>
							Ooops! There was an error. Try again later.
						</p>
					)}
					{formResult === 'ok' && (
						<p className='text-xl font-medium text-center'>
							I received your message. I&apos;ll get back to you ASAP.
						</p>
					)}
				</div>
			</form>
		</>
	);
};
export default Contact;
