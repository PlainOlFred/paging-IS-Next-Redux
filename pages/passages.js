import Link from 'next/link';
import AppNavbar from '../components/AppNavbar';
import PageLayout from "../components/PageLayout";
import fetch from 'isomorphic-unfetch';
import Problems from './problems';

const Passages = (props) => {
  return (
    <div>
      <PageLayout>
        <h1>Passages Page</h1>
        <ul >
          {props.passages.map(passage => (
          <li
            key={passage.id}
          >
            {passage.text}
          </li>
        ))}

        </ul>
        
      </PageLayout>   
    </div>
  )
}

Passages.getInitialProps = async () => {
  const res = await fetch('http://34.216.186.56/api/passages');
  const data = await res.json();

  

  return {
    passages: data.data.passages
  }
}

export default Passages