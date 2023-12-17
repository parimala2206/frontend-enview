import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data.js';
import { Typography} from '@material-ui/core';


function App() {
  const [name,setName]=useState(data);
  const [search, setSearch] = useState('');
  return (
    <div>
      <Container>
        <Form>
          <InputGroup className='my-3'>
            <Form.Control onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search' />
          </InputGroup>
        </Form>
      </Container>
      <Container>
        <h2>Alerts</h2>
        {data.filter((item) => {
          return search.toLowerCase() === '' ? item : item.alert_type.toLowerCase().includes(search);
        })
          .map((item, index) => (
            <div key={index}>
                 <hr></hr>
                <h4>{item.alert_type}</h4>
                <ul><li>{item.timestamp}</li></ul>
                <p> <Typography  display='inline' fontWeight='280px'>Driver: </Typography>{item.driver_friendly_name} / {item.vehicle_friendly_name}</p>
                <button>Mark As False Alarm</button>
                </div>
              ))}
          </Container>
    </div>
  );
}

export default App;
