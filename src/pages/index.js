import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import Projects from '../sections/Projects';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <Projects />
    <Footer />
  </Layout>
);

export default IndexPage;
