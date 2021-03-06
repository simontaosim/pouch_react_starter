import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import TestQiniu from "./testQiniu/index.js";
import MainContainer from "../components/MainContainer";
import Recommands from "../components/Recommands.js";
import { Header } from 'semantic-ui-react'
import VideoPlayer from "../components/VideoPlayer.js";

const AppRoute = () => (
  <Router>
      <MainContainer>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cate" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/tags" component={Topics} />
      <Route path="/search" component={Topics} />
      <Route exact path="/video/:id" component={Video} />
      </Switch>
      </MainContainer>
  </Router>
);

const Home = () => (
  <div>
    <Header as='h2' content='站长推荐' />
    <Recommands />
  </div>
);

const About = () => (
  <div>
     <TestQiniu />
  </div>
);
const Video = ({match}) => (
  <div>
     <Header as='h2' content={'站长推荐'+match.params.id} />
     <VideoPlayer />
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default AppRoute;