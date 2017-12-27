import React from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../lib/initStore';
import Page from '../components/Page';

const Projects = () => <Page>Projects</Page>;

export default withRedux(initStore, null, null)(Projects);
