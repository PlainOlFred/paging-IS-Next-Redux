import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'


// Components
import PageLayout from "../components/PageLayout";
import Link from 'next/link'

// Actions
import { getPassages, setPassage, incrementPage, resetCurrentPage } from "../redux/actions/passage.actions";

const passageListStyle = {
  listStyle: 'none',
  

}
const passageLinkStyle = {
  
  border: '1px soild #DDD'

}

const Index = (props) => {
  const {passages, currentPage,  totalPages,  isScrolling} = props.passage;
  const {incrementPage, resetCurrentPage} = props
   

  useEffect(() => {
    // this action rerenders page
    props.getPassages(currentPage);

    
    const handleScroll = (e) => {

       const lastElm = document.querySelector('ul.passageLinks > li:last-child');
       const lastLiOffest = lastElm.offsetTop + lastElm.clientHeight 
       const pageOffset = window.pageYOffset + window.innerHeight
       let bottomOffset = 20

       if(pageOffset > lastLiOffest - bottomOffset && currentPage <= totalPages ) {
        incrementPage();
        // loadMore(currentPage);
        console.log('bottom');
       }
    }

  //  Addd eventListener
    window.addEventListener('scroll', handleScroll);

    // Remove eventListener with a return statement here
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [currentPage])

  
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
          </li>
        ))}
      </ul> : <ul></ul>} 
    </PageLayout>
  )
}

Index.getInitialProps = async ({reduxStore, req }) => {

  return {
   hello: 'Hello World!!',
  }
}

// Dispath to Props
const mapDispatchToProps = dispatch => {
  return {
    getPassages: bindActionCreators(getPassages, dispatch),
    setPassage: bindActionCreators(setPassage, dispatch),
    incrementPage: bindActionCreators(incrementPage, dispatch),
    resetCurrentPage: bindActionCreators(resetCurrentPage, dispatch)
    
  }
}

// State to Props
const mapStateToProps = (state) => ({
  passage: state.passage
})

// export default connect()(Index);
export default connect(mapStateToProps,  mapDispatchToProps)(Index);