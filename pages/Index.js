import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

// Components
import PageLayout from "../components/PageLayout";

// Actions
import { getPassages } from "../redux/actions/passage.actions";

const passageListStyle = {
  listStyle: 'none'
}



const Index = (props) => {
  
  
  // useEffect(() => {
  //   // this action rerenders page
  //   getPassages();

  //   console.log('Hooks')

  //   return () => console.log('bye, bye')
  // }, [props])

  
  return (
    <PageLayout>
      <h1>Index</h1>
      <p>{props.hello}</p>
      
      {/* <ul style={passageListStyle}>
        {props.passage.map(passage => (
          <li key={passage.id}>
            <Link href="/passage/[id]" as={`/passage/${passage.id}`}>
                <a>{passage.reference_id} {passage.title}`</a>
            </Link>
          </li>
        ))}
      </ul> */}
    </PageLayout>
  )
}

Index.getInitialProps = async ({ }) => {
  
  return {
   hello: 'Hello World',
  }
}

// Dispath to Props
const mapDispatchToProps = dispatch => {
  return {
    getPassages: bindActionCreators(getPassages, dispatch),
    
  }
}

// State to Props
const mapStateToProps = (state) => ({
  passage: state.passage
})

// export default connect()(Index);
export default connect(mapStateToProps,  mapDispatchToProps)(Index);