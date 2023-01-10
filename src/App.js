import './App.css';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function App() {
  const [object, setObject] = useState({
      instanceName:"",
      instanceCount:""
    }

  );
  const handleChange=(e)=>{
 setObject((prev)=>{
   return {...prev, [e.target.name]: e.target.value}
 })
 console.log(object);
  }
  return (
    <div className="App">
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Instance Name</Form.Label>
        <Form.Control type="text" placeholder="instance name" name="instanceName" value={object.instanceName} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCount">
        <Form.Label>Count</Form.Label>
        <Form.Control type="number" placeholder="Count" name="instanceCount" value={object.instanceCount} onChange={handleChange} />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={(e)=>{ e.preventDefault();  axios.post('http://localhost:5000/vars', object)
        .then(response => console.log(response.data)); }}>
        Submit 
      </Button>
    </Form>
    </div>
  );
}

export default App;
