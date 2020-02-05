import AppNavbar from './AppNavbar';

const layoutStyle = {
  margin: 20,
  padding: 20, 
  border: '1px dashed black'
}

const PageLayout = porps => {
  return (
    <div style={layoutStyle}>
      <AppNavbar />
      {porps.children}
    </div>
  )
}

export default PageLayout;