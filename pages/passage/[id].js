import PageLayout from '../../components/PageLayout';
import { connect } from 'react-redux';



const Passage = props => (
  
  <PageLayout>
    <h1>{props.passage.title}</h1>
    <div
      style={{color: 'red'}}
      dangerouslySetInnerHTML={{__html: props.passage.text}}
    ></div>
  </PageLayout>
);

Passage.getInitialProps = async ({reduxStore, query}) => {
  const state =reduxStore.getState();
  

  return {
    passage: state.passage.currentPassage
   
  }
   
};


// No need to use connect with mapSatatoProps with
// State to Props
// const mapStateToProps = (state) => ({
//   passage: state.passage
// })

// export default connect(mapStateToProps)(Passage);
export default connect()(Passage);