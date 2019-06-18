import React from "react";
import ReactDOM from "react-dom";

const App = () => "hello world";

const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(<App />, MOUNT_NODE);
