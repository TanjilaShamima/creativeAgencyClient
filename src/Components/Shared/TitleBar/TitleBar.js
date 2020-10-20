
import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { addLoggedinUser } from '../../../Redux/AgencyActions/AgencyActions';
import { handleSignOut } from '../Login/SignOutManager';

const TitleBar = ({user, addLoggedinUser}) => {

    const location = useLocation();
    const history = useHistory();
    let { from } = location.state || { from: { pathname: "/" } };

    const signOut = () => {
        handleSignOut()
        .then(res => {
            addLoggedinUser(res);
            sessionStorage.removeItem('token');
            history.replace(from);
        })
        .catch(err => console.log(err));
    }

    return (
        <>
           <Navbar collapseOnSelect  expand="sm" className="bg-transparent" variant="light">
               <Container>
                    <Navbar.Brand><Link to={`/`}><Image width={180} src="/images/logos/applogo.png" alt="logo" /></Link></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end font-weight-bold">
                        <Navbar.Text>
                            <Nav.Link as={Link} to={`/`}>Home</Nav.Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Nav.Link>Our Portfolio</Nav.Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Nav.Link>Our Team</Nav.Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Nav.Link>Contact Us</Nav.Link>
                        </Navbar.Text>
                        {
                            user.email ?
                            <>
                            <Navbar.Text>
                                <Nav.Link>{user.displayName}</Nav.Link>
                            </Navbar.Text>
                            <Navbar.Text>
                                <Nav.Link><Button onClick={signOut} className="font-weight-bold" variant="warning">Sign Out</Button></Nav.Link>
                            </Navbar.Text>
                            </>:
                            <>
                            <Navbar.Text>
                                <Nav.Link as={Link} to={`/dashboard`}><Button className="font-weight-bold" variant="dark"><div className="px-4">Login</div></Button></Nav.Link>
                            </Navbar.Text>
                            </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    addLoggedinUser : addLoggedinUser
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);