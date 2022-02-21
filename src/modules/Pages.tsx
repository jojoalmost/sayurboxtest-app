import React from "react";
import {Container, Header} from "../components/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Home = React.lazy(() => import('./home'));
const People = React.lazy(() => import('./people'));
const Planets = React.lazy(() => import('./planets'));
const Species = React.lazy(() => import('./species'));
const Starships = React.lazy(() => import('./starships'));
const Vehicles = React.lazy(() => import('./vehicles'));

const Pages: React.FC = () => (
    <BrowserRouter>
        <Header/>
        <Container>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="people" element={<People/>}/>
                <Route path="people/:id" element={<People/>}/>
                <Route path="planets" element={<Planets/>}/>
                <Route path="planets/:id" element={<Planets/>}/>
                <Route path="species" element={<Species/>}/>
                <Route path="species/:id" element={<Species/>}/>
                <Route path="starships" element={<Starships/>}/>
                <Route path="starships/:id" element={<Starships/>}/>
                <Route path="vehicles" element={<Vehicles/>}/>
                <Route path="vehicles/:id" element={<Vehicles/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </Container>
    </BrowserRouter>
)
export default Pages;
