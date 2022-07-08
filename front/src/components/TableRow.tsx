import React from 'react';
import { Beer } from '../types';
import client from "../client";
import { ButtonGroup, Button, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

type Props = {
  beer: Beer
}

const TableRow: React.FC<Props> = ({ beer }) => {
  return (
    <tr>
      <td>{ beer.id }</td>
      <td>{ beer.name }</td>
      <td>{ beer.type }</td>
      <td>{ beer.country }</td>
      <td>
        <ButtonGroup>
          <Button variant="warning">
            <NavLink to={`/beers/${beer.id}`} className="link">
              Edit
            </NavLink>
          </Button>
          <Button variant="danger">Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  )
}

export default TableRow
