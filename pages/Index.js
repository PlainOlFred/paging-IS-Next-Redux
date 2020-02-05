import Link from 'next/link';
import AppNavbar from "../components/AppNavbar";
import PageLayout from "../components/PageLayout";
import fetch from 'isomorphic-unfetch'

const PostLink = props => {
  return (
    <li>
      <Link href="/p/[id]" as={`/p/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
  )
}

const Index = (props) => {
  return (
    <PageLayout>
      <h1>Index</h1>
      
      <ul>
        {props.passages.map(passage => (
          <li key={passage.id}>
            <Link href="/passage/[id]" as={`/passage/${passage.id}`}>
                <a>{passage.reference_id} {passage.title}`</a>
            </Link>
          </li>
        ))}
      </ul>
    </PageLayout>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch('http://34.216.186.56/api/passages');
  const data = await res.json();

  

  return {
    passages: data.data.passages
  }
}

export default Index;