import React, { Component } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { green, blueGrey } from 'material-ui/colors'

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
})

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Todo list 2</h1>
          </header>
          <div className="App-intro">
            <TodoList />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
