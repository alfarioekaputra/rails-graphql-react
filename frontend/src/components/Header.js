import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
        <div>
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/" className="navbar-item">
                            Home
                        </Link>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" href="/documentation/overview/start/">
                            Post
                            </a>
                            <div className="navbar-dropdown is-boxed">
                                <Link to="/post-list" className="navbar-item">
                                    List
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                        
                        {authToken ? (
                        <div
                            className="ml1 pointer black"
                            onClick={() => {
                            localStorage.removeItem(AUTH_TOKEN)
                            this.props.history.push(`/`)
                            }}
                        >
                            logout
                        </div>
                        ) : (
                        <Link to="/login" className="button is-primary is-rounded">
                            login
                        </Link>
                        )}
                        </div>
                    </div>
                    </div>
                </div>
                </nav>
        </div>
    )
  }
}

export default withRouter(Header)