
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
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">SERVICE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">PACKAGES</a>
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
