import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Hus from "./Hjelpefiler/Bilder/Hus.png";
import Kalkulatorimg from "./Hjelpefiler/Bilder/Kalkulator.png";
import SPVLogo from "./Hjelpefiler/Bilder/SPVLogo.png";
import Knapp from "./Hjelpefiler/Knapp";
import { Boligkjop, Kalkulator, VeienTil } from "./Hjelpefiler/Tekster";
import BybaneStopp from "./Veien/BybaneStopp";

const Knapper = styled(Link)`
    text-decoration: none;
    color: black;
`;

const Veien = styled.div`
    background-color: #A7C3A7;
    text-align: center;
    border-radius: 6px;
    width: 300x;
    margin: 10px;
    margin-top: 30px;
    padding 10px;    
`;

const Bybanen = styled.div`
    width: 60%;
    padding: 20px;
    margin-top: 30px;
    margin-left: 13%;
    background-color: #DDEDDD;
    border-radius: 10px;
`;

export const StartKnapp = styled.button`
    background-color: #FFBD01;
    font-weight: bold;
    display: block;
    margin-left: auto;
    margin-right: auto; 
    padding: 10px;
    height: 40px;
    margin-top: 30px;
    margin-bottom: 25px;
    border: 0px;
    border-radius: 40px;
`;

function LandingSide() {
    return (
    <div>
        <Knapper to="/Veien/VeienTilDinForsteBolig">
            <Veien>
                <img src={SPVLogo} alt="Spv logo"/>
                <h2>{ VeienTil.tittel }</h2>
                {/*<p>{ VeienTil.tekst }</p>*/}
                <Bybanen><BybaneStopp /></Bybanen>
                <StartKnapp>Se stegene her</StartKnapp>
            </Veien>
        </Knapper>
        <Knapper to="/SimulertBoligkjop">
            <Knapp bilde={ Hus } tittel={ Boligkjop.tittel } undertekst={ Boligkjop.tekst }/>
        </Knapper>
        <Knapper to="https://www.spv.no/lan/boliglan/boliglanskalkulator" target="_blank">
            <Knapp bilde={ Kalkulatorimg } tittel={ Kalkulator.tittel } undertekst={ Kalkulator.tekst }/>
        </Knapper>
    </div>
    )
}

export default LandingSide;