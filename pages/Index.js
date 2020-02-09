import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {throttle} from'lodash'

// Components
import PageLayout from "../components/PageLayout";
import Link from 'next/link'
import useEvent from '../components/useEvent'

// Actions
import { getPassages, removePassages, setPassage } from "../redux/actions/passage.actions";

// Element styling
const passageListStyle = {
  listStyle: 'none'
}
const passageLinkStyle = {
  border: '1px soild #DDD'
}

const Index = (props) => {
  const {passages, isLoading} = props.passage;
  const { currentPage, totalPages,  isScrolling} = props.passage;
  const {getPassages, removePassages, setLoading} = props

  useEffect(() =>{
      const {currentPage} = props.passage
      getPassages(currentPage);

      return () => {
        removePassages()
      }
  },[])

//EventListener and Handler for scroll
  const handleScrollPage = (e) => {
      // maybe pass in a e ^here
      if (isScrolling) return;
      if(currentPage >= totalPages) return;

      const bottomPassage = document.querySelector('ul.passageLinks > li:last-child');
      if(bottomPassage) {
        const bpOffest = bottomPassage.offsetTop + bottomPassage.clientHeight;
        const scrollOffset = window.pageYOffset + window.innerHeight;

        
 
        if(scrollOffset > bpOffest + 30) {
          getPassages(currentPage)
        }
      }

    }
  useEvent('scroll', throttle(handleScrollPage,500))

  
  return (
    <PageLayout>
      <h1>Index</h1>
      <p>{props.hello}</p>
      
      {passages.length > 1 ? <ul className="passageLinks" style={passageListStyle}>
        {passages.map(passage => (
          
          <li key={passage.id} style={passageLinkStyle}>
            <Link href="/passage/[id]" as={`/passage/${passage.id}`}>
                <a onClick={()=>props.setPassage(passage.id)}><h3>{passage.reference_id}. {passage.title}</h3></a>
            </Link>
                <blockquote>{passage.subjects.label}</blockquote>

          </li>
        ))}
      </ul> : <ul></ul>} 
      
     {isLoading ?  <h4>Laodaing.....</h4> : <></>}
    </PageLayout>

  )
}

Index.getInitialProps = async ({reduxStore, req }) => {
  

  return {
   
  }
}

// Dispath to Props
const mapDispatchToProps = dispatch => {
  return {
    getPassages: bindActionCreators(getPassages, dispatch),
    setPassage: bindActionCreators(setPassage, dispatch),
    // scrollPage: bindActionCreators(scrollPage, dispatch),
    removePassages: bindActionCreators(removePassages, dispatch)
    
  }
}

// State to Props
const mapStateToProps = (state) => ({
  passage: state.passage
})

// export default connect()(Index);
export default connect(mapStateToProps,  mapDispatchToProps)(Index);