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
  console.log(query.id)
  const state =reduxStore.getState();
  console.log(state.passage.currentPassage)

  return {
    passage: state.passage.currentPassage
   
  }
   
};

// State to Props
// const mapStateToProps = (state) => ({
//   passage: state.passage
// })

// export default connect()(Index);
export default connect()(Passage);