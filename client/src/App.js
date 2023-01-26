import React from "react";
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {GoogleOAuthProvider} from '@react-oauth/google';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {

    return (
        <GoogleOAuthProvider clientId="932942675904-25s8v03248gvtuku89v596kdb1020bm7.apps.googleusercontent.com">
        <Router>
            <Container maxWidth="lg">
            <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home/>}></Route>
                    <Route path="/auth" exact element={<Auth/>}></Route>
                </Routes>

            </Container>
        </Router>
        </GoogleOAuthProvider>

    )
}

export default App;
