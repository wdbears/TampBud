import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Router from "react-router-dom/BrowserRouter"
import Pages from "../pages"
import CssBaseline from "@material-ui/core/CssBaseline"
import BottomNav from "../components/BottomNav"
import firebase from 'firebase'

const styles = {
  app: { minHeight: "100vh" },
  navbar: { position: "fixed", bottom: 0, width: "100%" },
  main: { marginBottom: "" }
};

class App extends Component {

  componentDidMount() {
    const config = {
        apiKey: "AIzaSyCpHYeJmoxC1hdnUOPl1lqI6a3FyUNdDIU",
        authDomain: "tampbud.firebaseapp.com",
        databaseURL: "https://tampbud.firebaseio.com",
        projectId: "tampbud",
        storageBucket: "tampbud.appspot.com",
        messagingSenderId: "867512165187"
    };
    firebase.initializeApp(config);

  /* 
    firebase.database().ref('requests').set({
      createdBy: "Alice Zhu",
      location: "0,0",
      timeStamp: Date.now(),
      completed: false
    });
  */

  //AIzaSyDWBOIZ_dwzgmxXJlN6AKpfR1vXd4SBxZU GOogle maps
  }



  render() {
    return (
      <Router>
        <div className={this.props.classes.app}>
          <main className={this.props.classes.main}>
            <CssBaseline />
            <Pages />
          </main>
          <footer className={this.props.classes.navbar}>
            <BottomNav />
          </footer>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);