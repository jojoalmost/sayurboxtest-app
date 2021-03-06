import React from "react";
import {Container, Header} from "../components/Layout";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

const Films = React.lazy(() => import('./films/Films'));
const FilmDetail = React.lazy(() => import('./films/FilmDetail'));
const People = React.lazy(() => import('./people/People'));
const PeopleDetail = React.lazy(() => import('./people/PersonDetail'));
const Planets = React.lazy(() => import('./planets/Planets'));
const PlanetDetail = React.lazy(() => import('./planets/PlanetDetail'));
const Species = React.lazy(() => import('./species/Species'));
const SpeciesDetail = React.lazy(() => import('./species/SpeciesDetail'));
const Starships = React.lazy(() => import('./starships/Starships'));
const StarshipDetail = React.lazy(() => import('./starships/StarshipDetail'));
const Vehicles = React.lazy(() => import('./vehicles/Vehicles'));
const VehicleDetail = React.lazy(() => import('./vehicles/VehicleDetail'));

const Pages: React.FC = () => (
    <BrowserRouter>
        <Header/>
        <Container>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/films"/>}
                />
                <Route path="films" element={<Films/>}/>
                <Route path="films/:id" element={<FilmDetail/>}/>
                <Route path="people" element={<People/>}/>
                <Route path="people/:id" element={<PeopleDetail/>}/>
                <Route path="planets" element={<Planets/>}/>
                <Route path="planets/:id" element={<PlanetDetail/>}/>
                <Route path="species" element={<Species/>}/>
                <Route path="species/:id" element={<SpeciesDetail/>}/>
                <Route path="starships" element={<Starships/>}/>
                <Route path="starships/:id" element={<StarshipDetail/>}/>
                <Route path="vehicles" element={<Vehicles/>}/>
                <Route path="vehicles/:id" element={<VehicleDetail/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/films"/>}
                />
            </Routes>
        </Container>
    </BrowserRouter>
)
export default Pages;
