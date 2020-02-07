import Link from 'next/link';
import React, { useEffect } from 'react'
import AppNavbar from "../components/AppNavbar";
import PageLayout from "../components/PageLayout";
import fetch from 'isomorphic-unfetch'
import { bindActionCreators } from 'redux'


import { connect } from 'react-redux';

import { getPassages } from "../redux/actions/passage.actions";

const passageListStyle = {
  listStyle: 'none'
}



const Index = (props)=> {
  // console.log(props.passage)
 

  useEffect(() => {
    // this action rerenders page
    //  props.getPassages();
  }, [props])

  
  return (
    <PageLayout>
      <h1>Index</h1>
      <p>{props.passage.foo}</p>
      
      
      
      {/* <ul style={passageListStyle}>
        {props.passages.map(passage => (
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

Index.getInitialProps = async ({store}) => {
  store.dispatch(getPassages())
  
  

  return {
   store
  }
}





const mapDispatchToProps = dispatch => {
  return {
    getPassages: bindActionCreators(getPassages, dispatch),
    
  }
}

const mapStateToProps = (state) => ({
  passage: state
})

export default connect(mapStateToProps,  mapDispatchToProps)(Index);