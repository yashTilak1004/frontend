import React from 'react';
import { Link } from 'react-router-dom';
function Header()
{
    return (<header className=" border-bottom header1">
            <div className="py-4 container-fluid ">
            <div className="row">
                <div className="col-3">
                <Link to='/' className=" text-light text-decoration-none" style={{color:"black",textDecoration:"none",fontSize:"25px"}}>
                    <h4>Research Grant Protal</h4>
                </Link>
                </div>
                <div className="col-3 text-end offset-6">
                <button type="button" className="btn btn-light  mx-2"><Link to='/' style={{color:"black",textDecoration:"none",fontSize:"18px"}}>Login</Link></button>
                <button type="button" className="btn btn-danger "><Link to='/Register' style={{color:"black",textDecoration:"none",fontSize:"18px"}}>Register</Link></button>
                </div>
            </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-bg-light">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item px-md-5">
                <Link to='/User' style={{color:"#FFF",textDecoration:"none",fontSize:"20px"}}>User Page</Link>
            </li>
            <li className="nav-item px-md-5">
                <Link to='/Stats' style={{color:"#FFF",textDecoration:"none",fontSize:"20px"}}>Stats</Link>
            </li>
            <li className="nav-item px-md-5">
                <Link to='/List' style={{color:"#FFF",textDecoration:"none",fontSize:"20px"}}>List</Link>
            </li>
            <li className="nav-item px-md-5">
                <Link to='/about' style={{color:"#FFF",textDecoration:"none",fontSize:"20px"}}>About</Link>
            </li>
            </ul>
            
        </div>
        </nav>
        </header>);
}
export default Header;