import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='NavBar-style'>
      <nav>
        <Link to="/template">Template</Link> | 
        <Link to="/pricing">Pricing</Link> | 
        <Link to="/apps">Apps</Link> | 
        <Link to="/jobs">Jobs</Link> | 
        <Link to="/blog">Blog</Link> | 
        <Link to="/developer">Developer</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/help">Help</Link> | 
        <Link to="/legal">Legal</Link> | 
        <Link to="/cookie-setting">Cookie Setting</Link> 
      
      </nav>
    </div>
  );
}

export default NavBar;
