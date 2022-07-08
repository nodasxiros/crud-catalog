import React, { useState, useEffect } from "react";
import client from "../client";
import { Table, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Beer } from '../types'
import TableRow from "./TableRow";

const BeerList: React.FC = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true)
    client
      .get('/beers')
      .then(({ data }) => {
        setBeers(data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
        setIsLoading(false)
      }) 
  }, [])

  return (
    <div>
      <h1>Beer List</h1>
      { isLoading && <p>Loading...</p> }
      { !isLoading &&
        <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            { beers.map((beer, i) => <TableRow key={i} beer={beer} />) }
          </tbody>
        </Table>
      }
    </div>
  );
}

export default BeerList;