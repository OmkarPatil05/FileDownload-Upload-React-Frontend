const Navbar = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" hre="null" >Upload Download</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" >Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link">About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" >Contacts Us</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;