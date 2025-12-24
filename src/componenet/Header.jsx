import { Link } from "react-router-dom";
function Header() {
    return (
        <>
        <div className="container-fluid header">
        <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">LOGOHERE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link to="/" className="nav-link active">HOME</Link>
         
        </li>
       <li className="nav-item">
         <Link to="about" className="nav-link active">ABOUT</Link>
       
        </li>
        <li className="nav-item">
          <Link to="service" className="nav-link active">SERVICE</Link>
          
        </li>
        <li className="nav-item">
           <Link to="portfolio" className="nav-link active">PORTFOLIO</Link>
          
        </li>
        <li className="nav-item">
        <Link to="packages" className="nav-link active">PACKAGES</Link>
       
        </li>
      
       
      </ul>
      <div className="btss" role="search">
      <button type="button" class="btn btn-dark">Dark</button>
       <button type="button" class="btn btn-dark">Dark</button>
      </div>
    </div>
  </div>
</nav>
   </div>
   </div>


        </>
    )
}
export default Header;
