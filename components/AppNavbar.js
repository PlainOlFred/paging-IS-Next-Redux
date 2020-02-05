import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const AppNavbar = () => {
  return(
    <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/passages">
      <a style={linkStyle}>Passages</a>
    </Link>
    <Link href="/problems">
      <a style={linkStyle}>Problems</a>
    </Link>
  </div>
  )
  
}

export default AppNavbar;