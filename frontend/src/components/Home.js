import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'

class Home extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
        <div>
            <section className="hero is-medium is-primary is-bold">
                <div className="hero-body">
                    <div className="container">
                    <h1 className="title">
                        Primary bold title
                    </h1>
                    <h2 className="subtitle">
                        Primary bold subtitle
                    </h2>
                    </div>
                </div>
            </section>
        </div>
    )
  }
}

export default withRouter(Home)