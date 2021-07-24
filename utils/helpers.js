export const formatDate = (date) => {
	return new Date(date).toLocaleDateString('en-US', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	});
};

export function filterResponse(data) {
	const article = {
		body_markdown: data.body_markdown,
		comments_count: data.comments_count,
		cover_image: data.cover_image,
		id: data.id,
		page_views_count: data.page_views_count,
		description: data.description,
		public_reactions_count: data.public_reactions_count,
		published_at: data.published_at,
		slug: data.slug,
		tag_list: data.tag_list,
		title: data.title,
		url: data.url,
	};
	return article;
}
