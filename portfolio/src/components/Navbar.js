import './Navbar.css'

function Navbar() {
    return(
        <div id="navbar">
            <div className='nav-header'>JS Documentation</div>
            <div className='nav-content'>
                <a className="nav-link" href="#Introduction">Introduction</a>
                <a className="nav-link" href="#What_you_should_already_know">What you should already know</a>
                <a className="nav-link" href="#JavaScript_and_Java">JavaScript and Java</a>
                <a className="nav-link" href="#Variables">Variables</a>
                <a className="nav-link" href="#Declaring_variables">Declaring variables</a>
            </div>
        </div>
    );
}

export default Navbar