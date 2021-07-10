module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['res.cloudinary.com', 'dev-to-uploads.s3.amazonaws.com'],
	},
	env: {
		EmailServiceId: process.env.EmailServiceId,
		EmailTemplateId: process.env.EmailTemplateId,
		EmailUserId: process.env.EmailUserId,
	},
};
