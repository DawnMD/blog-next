import NextImage from 'next/image';

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
          <figure className='text-center'>
            <NextImage
              className='mx-auto'
              src={image.properties.src}
              alt={image.properties.alt}
              width={800}
              height={400}
              loading='lazy'
            />
            <figcaption className='m-0 text-sm text-gray-600 dark:text-gray-400'>
              {image.properties.alt}
            </figcaption>
          </figure>
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };
};
