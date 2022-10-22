import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../layouts/Header'; // Import a component from
import Sidebar from '../layouts/Sidebar';
import Footer from '../layouts/Footer';

export class Dashboard extends Component {
  render() {
    return (
      <>
        <Header/>
        <Sidebar/>
        <Footer/>
        </>
    )
  }
}

export default Dashboard;
