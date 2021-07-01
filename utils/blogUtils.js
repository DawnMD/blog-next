import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const pathDirectory = path.join(process.cwd(), 'content');

export function getBlog(blog) {
	const blogSlug = blog.replace(/\.md$/, '');
	const blogPath = path.join(pathDirectory, `${blogSlug}.md`);
	const blogContent = fs.readFileSync(blogPath, 'utf-8');
	const { data, content } = matter(blogContent);
	const parsedBlog = {
		blogSlug,
		...data,
		content,
	};
	return parsedBlog;
}

export function getAllBlogs() {
	const blogs = fs.readdirSync(pathDirectory);
	const blogArray = blogs.map((blog) => {
		return getBlog(blog);
	});
	const sortedBlogs = blogArray.sort((blogA, blogB) =>
		blogA.date > blogB.data ? -1 : 1
	);
	return sortedBlogs;
}

export function getFeaturedBlogs() {
	const allBlogs = getAllBlogs();
	const featuredBlogs = allBlogs.filter((blog) => blog.isFeatured);
	return featuredBlogs;
}
