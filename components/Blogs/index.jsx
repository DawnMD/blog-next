import List from '../shared/List';
import Section from '../shared/SectionHeading';
const Blogs = ({ blogs }) => {
	return (
		<Section title='All Blogs'>
			<List blogs={blogs} />
		</Section>
	);
};
export default Blogs;
