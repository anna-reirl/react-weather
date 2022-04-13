import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import City from "./City";

import "../styles/Cities.css";

function Cities () {
    const [cities, setCities] = React.useState([]);
    if (!cities.length) {
        axios.get("https://raw.githubusercontent.com/pensnarik/russian-cities/master/russian-cities.json").then(res => {
            setCities(res.data);
        });
    }
    return(
        <Table striped bordered hover className={"cities"}>
            <thead><tr><th>Name</th><th></th><th></th><th></th></tr></thead>
            <tbody>
            {cities.map(city => <City city={city}/>)}
            </tbody>
        </Table>
    );
}

export default Cities;
