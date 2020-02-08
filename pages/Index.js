import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'


// Components
import PageLayout from "../components/PageLayout";
import Link from 'next/link'


// Actions
import { getPassages, scrollPage, setPassage, incrementPage, removePassages, setLoading } from "../redux/actions/passage.actions";

const passageListStyle = {
  listStyle: 'none'
}
const passageLinkStyle = {
  border: '1px soild #DDD'
}

const Index = (props) => {
  const {passages, currentPage, totalPages,  isScrolling, isLoading} = props.passage;
  const {getPassages, removePassages, scrollPage, setLoading} = props

  useEffect(() =>{
      const {currentPage} = props.passage
      getPassages(currentPage);

    
      return () => {
        removePassages()
      }
  },[])

// Add and Remove EventListener
  useEffect(() => {
    
      const scrollPageListener = window.addEventListener('scroll', () => {
        console.log('we scrollong')
      })
    



    
  },[])



  const handleScrollPage = () => {
    scrollPage(currentPage);
  }

  
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
      <a onClick={handleScrollPage}>Next Page</a>
     {isLoading ?  <p>Laodaing.....</p> : <></>}
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
    incrementPage: bindActionCreators(incrementPage, dispatch),
    scrollPage: bindActionCreators(scrollPage, dispatch),
    removePassages: bindActionCreators(removePassages, dispatch)
    
  }
}

// State to Props
const mapStateToProps = (state) => ({
  passage: state.passage
})

// export default connect()(Index);
export default connect(mapStateToProps,  mapDispatchToProps)(Index);