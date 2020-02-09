import PageLayout from '../../components/PageLayout';
import { connect } from 'react-redux';
// import fetch from 'isomorphic-unfetch';


const Passage = props => (
  
  <PageLayout>
    <h1>{props.passage.title}</h1>
    <div
      style={{color: 'red'}}
      dangerouslySetInnerHTML={{__html: props.passage.text}}
    ></div>
    

  </PageLayout>
);

Passage.getInitialProps = async function(context) {
  const { id } = context.query;

  // const res = await fetch('http://34.216.186.56/api/passages');
  // const data = await res.json();
  console.log(`PASSAGE: ${data.data.passages.filter(passage => passage.id === id)[0]}`)

  return {
    passage: data.data.passages.filter(passage => passage.id === id)[0],
   
  }
   
};

// State to Props
const mapStateToProps = (state) => ({
  passage: state.passage
})

// export default connect()(Index);
export default connect(mapStateToProps)(Passage);