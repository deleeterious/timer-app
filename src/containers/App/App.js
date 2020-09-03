import React from 'react'
// react-router
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
// material-ui
import { Container } from '@material-ui/core'
// components
import Timer from '../../components/Timer'
import Tabs from '../Tabs'
import TasksLogList from '../TasksLogList'
import TaskInfo from '../../components/TaskInfo'
import Graph from '../Graph'
import ErrorPage from '../../components/Error'
// style
import classes from './App.module.css'

const App = () => (
  <Container maxWidth={false} className={classes.App}>
    <Router>
      <Route exact path={['/tasks', '/graph']} component={Timer} />
      <Route exact path={['/tasks', '/graph']} component={Tabs} />
      <Route exact path="/tasks" component={TasksLogList} />
      <Route exact path="/graph" component={Graph} />
      <Route exact path="/tasks/:id" component={TaskInfo} />
      <Route exact path="/error" component={ErrorPage} />
      <Redirect to="/tasks" />
    </Router>
  </Container>
)

export default App
