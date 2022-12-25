import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div id="PSK-HEAD">
        <img src='https://cdn.shopify.com/s/files/1/0175/2324/5110/products/phi-sigma-kappa-main-logo-sticker_300x300.png?v=1610773892'></img>
        <h1>Phi Sigma Kappa</h1>
        <h2>Song Requests</h2>
       </div>
       <div id='songbox'>
        <Form>
          <Form.Control type='text' placeholder="Song Name" id='songInput'/>
          <Form.Control type='text' placeholder="Artist" id='artistInput'/>
        </Form>
        <div id='queue'>
          test
        </div>
       </div>
      </header>
    </div>
  );
}

export default App;
