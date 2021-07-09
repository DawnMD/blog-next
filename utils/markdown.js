export const sanitizeDevToMarkdown = (markdown) => {
	let correctedMarkdown = '';

	// Dev.to sometimes turns "# header" into "#&nbsp;header"
	const replaceSpaceCharRegex = new RegExp(String.fromCharCode(160), 'g');
	correctedMarkdown = markdown.replace(replaceSpaceCharRegex, ' ');

	// Dev.to allows headers with no space after the hashtag (I don't use # on Dev.to due to the title)
	const addSpaceAfterHeaderHashtagRegex = /##(?=[a-z|A-Z])/g;
	return correctedMarkdown.replace(addSpaceAfterHeaderHashtagRegex, '$& ');
};

export const customRenderMarkdown = () => {
	return {
		p(paragraph) {
			const { node } = paragraph;

			if (node.children[0].tagName === 'img') {
				const image = node.children[0];
				return (
					<div>
						<figure>
							<img
								src={image.properties.src}
								alt={image.properties.alt}
								className='mx-auto'
							/>
							<figcaption className='text-center'>
								{image.properties.alt}
							</figcaption>
						</figure>
					</div>
				);
			}
			return <p>{paragraph.children}</p>;
		},
	};
};
