import React, { Component } from "react";
import Routes from "./routes";

export default class App extends Component {
    render() {
        return (
            <Router>
            <Scene key="root" hideNavBar={true}>
            <Scene key="home" Component={Home} initial={true}/>
            <Scene key="detail" omponent={Detail}/>
            </Scene>
            </Scene>
            </Scene>
            </Router>
        );
    }
}