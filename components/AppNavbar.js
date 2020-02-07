import Link from "next/link";
import { connect } from 'react-redux';

const linkStyle = {
  marginRight: 15
};

const AppNavbar = (props) => {
  const {currentPassage_id} = props.passage
  
  return(
    <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/passage/[id]" as={`/passage/${currentPassage_id}`}>
      <a style={linkStyle}>Current Passage</a>
    </Link>
    <Link href="/problems">
      <a style={linkStyle}>Problems</a>
    </Link>
  </div>
  )
  
}

// State to Props
const mapStateToProps = (state) => ({
  passage: state.passage
})

export default connect(mapStateToProps)(AppNavbar);