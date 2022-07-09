import React, { useState, SyntheticEvent, useEffect } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { BeerDto, Beer } from "../types";
import client from "../client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

interface UrlParams {
  id?: string
}

type Props = {
  history: any
}

const BeerForm: React.FC<Props> = ({ history }) => {
  const urlParams = useParams<UrlParams>()
  const beerDto: BeerDto = {
    name: '',
    type: '',
    country: ''
  }
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const [beer, setBeer] = useState<Beer | BeerDto>(beerDto)
  const [isValid, setIsValid] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const handleChange = (field: 'name' | 'type' | 'country', value: string): void => {
    setBeer({...beer, [field]: value })
  }
  const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
    try {
      e.preventDefault()
      if (isEditMode && urlParams?.id)
      await client.patch(`/beers/${(beer as Beer).id}`, beer)
      else
      await client.post('/beers', beer)
      setBeer({
        name: '',
        type: '',
        country: ''
      })
      history.push('/')
    } catch (error: any) {
      setError(error)
    }
  }
  useEffect(() => {
    if (urlParams.id && !isEditMode) {
      client
        .get(`/beers/${urlParams.id}`)
        .then(({ data }) => setBeer(data) )
    }
    const {
      name,
      type,
      country
    } = { ...beer }
    const values = [
      name,
      type,
      country
    ]
    setIsValid(values.every(field => {
      const value = `${field}`.trim()
      return value !== ''
    }))
    setIsEditMode(true)
  }, [beer])
  return (
    <>
      { error && <Alert variant={'danger'}>{error}</Alert>}
    <div className="beer-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="name"
            value={beer.name}
            placeholder="Enter beer's name"
            onChange={(e) => { handleChange('name', e.target.value) }}
          />
        </Form.Group>
        <Form.Group controlId="type">
          <Form.Label>Type</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="type"
            value={beer.type}
            placeholder="Enter beer's type"
            onChange={(e) => { handleChange('type', e.target.value) }}
          />
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="country"
            value={beer.country}
            placeholder="Enter beer's country"
            onChange={(e) => { handleChange('country', e.target.value) }}
          />
        </Form.Group>
        <Button disabled={!isValid} variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
    </>
  );
}

export default BeerForm;
