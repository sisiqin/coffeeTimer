import React from 'react';
import {connect} from 'react-redux';
import Setup from './Setup';
import History from './History';
import { NavLink } from 'react-router-dom';




const mapDispatchToProps = (dispatch) => {
    return {};
}

const mapStateToProps = (state) =>{
    return {};
}

const Nabar = (props) => {
    return (
        <div>
            <nav className="nav-container">
            <div className="logo">
            <img className="logo-image" src ="https://d30y9cdsu7xlg0.cloudfront.net/png/640702-200.png" />
            <div className="project-name">Coffee Timer </div>
            </div>
                <ul >     
                    <div className="nav" role="presentation"> 
                        <button type="button" className="btn btn-light">
                            <NavLink to={"/setup"}> Start   </NavLink> 
                        </button> 
                    </div>
                    
                    <div className="nav history-btn" role="presentation"> 
                        <button type="button" className="btn btn-light">
                            <NavLink to={"/history"}> History  </NavLink> 
                        </button>
                    </div>
                </ul>
            </nav>
            <footer className="footer"> 
            <p> By: Sisi </p>
            <p> Special Love to: Hannah </p> 
            </footer>
        </div> 
    )
}



export default connect(mapStateToProps, mapDispatchToProps)(Nabar);