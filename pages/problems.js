import Link from 'next/link';
import AppNavbar from "../components/AppNavbar";
import PageLayout from "../components/PageLayout"
import fetch from 'isomorphic-unfetch';

// let domparser = new DOMParser()

// const ProblemCard = props => {
//   return (
    
//   )
// }

const Problems = (props) => {
  return (
    <div>
      <PageLayout>
        <h1>Problems Page</h1>
        <ul>
          {props.problems.map(problem => (
            <li
              key={problem.id}
            >
              {problem.text ? problem.text : "N/A"}
            </li>
          ))}
        </ul>
      </PageLayout>
    </div>
  )
}

Problems.getInitialProps = async () => {
  const res = await fetch('http://34.216.186.56/api/problems/')
  
  const data = await res.json();

  

  // console.log(`Data Count: ${data.length}`)

  return {
    problems: data.data.problems
  }

}

export default Problems;