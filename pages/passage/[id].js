import PageLayout from '../../components/PageLayout';
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <PageLayout>
    
    <hmtl>{props.passage}</hmtl>

  </PageLayout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch('http://34.216.186.56/api/passages');
  const data = await res.json();
  console.log(data.data.passages.filter(passage => passage.id === id)[0])

  return {
    passage: data.data.passages.filter(passage => passage.id === id)[0].text
    
  }
  
  
};

export default Post;