import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {throttle} from'lodash'

// Components
import PageLayout from "../components/PageLayout";
import Link from 'next/link'
import useEvent from '../components/useEvent'

// Actions
import { getProblems,removeProblems,setProblem } from "../redux/actions/problem.actions";

// Element styling
const problemListStyle = {
  listStyle: 'none'
}
const problemLinkStyle = {
  border: '1px soild #DDD'
}

const Index = (props) => {
  const {problems, isLoading} = props.problem;
  const { currentPage, totalPages,  isScrolling} = props.problem;
  const {getProblems, removeProblems, setProblem} = props

  useEffect(() =>{
      const {currentPage} = props.problem
      getProblems(currentPage);

      return () => {
        removeProblems()
      }
  },[])

//EventListener and Handler for scroll
  const handleScrollPage = (e) => {
      // maybe pass in a e ^here
      if (isScrolling) return;
      if(currentPage >= totalPages) return;

      const bottomProblem = document.querySelector('ul.problemLinks > li:last-child');
      if(bottomProblem) {
        const bpOffest = bottomProblem.offsetTop + bottomProblem.clientHeight;
        const scrollOffset = window.pageYOffset + window.innerHeight;

        
 
        if(scrollOffset > bpOffest + 40) {
          getProblems(currentPage)
        }
      }

    }
  useEvent('scroll', throttle(handleScrollPage,500))

  
  return (
    <PageLayout>
      <h1>Problems</h1>
      
      {problems.length > 1 ? <ul className="problemLinks" style={problemListStyle}>
        {problems.map(problem => (
          
          <li key={problem.id} style={problemLinkStyle}>
            <Link href="/problem/[id]" as={`/problem/${problem.id}`}>
                <a onClick={()=>setProblem(problem.id)}><h3>{problem.notes}</h3></a>
            </Link>
                
          </li>
        ))}
      </ul> : <ul></ul>} 
      
     {isLoading ?  <h4>Laodaing.....</h4> : <></>}
    </PageLayout>

  )
}

Index.getInitialProps = async ({reduxStore, req }) => {
  

  return {
   hello: "new page!!"
  }
}

// Dispath to Props
const mapDispatchToProps = dispatch => {
  return {
    getProblems: bindActionCreators(getProblems, dispatch),
    removeProblems: bindActionCreators(removeProblems, dispatch),
    setProblem: bindActionCreators(setProblem, dispatch)
    
  }
}

// State to Props
const mapStateToProps = (state) => ({
  problem: state.problem
})

// export default connect()(Index);
export default connect(mapStateToProps,  mapDispatchToProps)(Index);