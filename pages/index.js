import Hero from '../components/HomePage/Hero';
import FeaturedPost from '../components/HomePage/FeaturedPost';
export default function Home() {
	const DUMMY_POSTS = [
		{
			slug: 'getting-started-with-nextjs',
			title: 'Getting started with NextJS',
			date: '2021-06-30',
			excert: 'React framework for production',
			image: 'getting-started-nextjs.png',
		},
		{
			slug: 'getting-started-with-nextjs',
			title: 'Getting started with NextJS',
			date: '2021-06-30',
			excert: 'React framework for production',
			image: 'getting-started-nextjs.png',
		},
		{
			slug: 'getting-started-with-nextjs',
			title: 'Getting started with NextJS',
			date: '2021-06-30',
			excert: 'React framework for production',
			image: 'getting-started-nextjs.png',
		},
		{
			slug: 'getting-started-with-nextjs',
			title: 'Getting started with NextJS',
			date: '2021-06-30',
			excert: 'React framework for production',
			image: 'getting-started-nextjs.png',
		},
		{
			slug: 'getting-started-with-nextjs',
			title: 'Getting started with NextJS',
			date: '2021-06-30',
			excert: 'React framework for production',
			image: 'getting-started-nextjs.png',
		},
	];
	return (
		<div>
			<Hero />
			<FeaturedPost posts={DUMMY_POSTS} />
		</div>
	);
}
