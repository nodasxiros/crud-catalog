import React, { useEffect, useState, } from 'react';
import { Beer } from '../types';
import client from "../client";
import { ButtonGroup, Button, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

type Props = {
  beer: Beer
  handleChange: () => void
}

const TableRow: React.FC<Props> = ({ beer, handleChange }) => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const handleDeleteRecord = async (id: number) => {
    try {
      setLoading(true)
      await client.delete(`/beers/${id}`)
      handleChange()
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  useEffect(() => {

  },[isLoading])
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
          <Button disabled={isLoading} variant="danger" onClick={() => handleDeleteRecord(beer.id)}>
            { isLoading ? 'Deleting...' : 'Delete' }
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  )
}

export default TableRow
