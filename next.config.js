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
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains; preload',
					},
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on',
					},
				],
			},
		];
	},
};
