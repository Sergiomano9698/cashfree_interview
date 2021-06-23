// import logo from './logo.svg';
import './App.css';

import Button from '../src/lib/components/Button'

import Container from '../src/lib/components/Container'
import Row from '../src/lib/components/Row'
import Grid from '../src/lib/components/Grid'
function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Button size="lg" bg_clr="blue" color="white" icon ="true" /> */}

      <Container>
        <Row className="row remove-gutters">
          <Grid columns="column column-3">
              One of three column
          </Grid>
          <Grid columns="column column-3">
              One of three column
          </Grid>
          <Grid columns="column column-3">
              One of three column
          </Grid>
          <Grid columns="column column-3">
              One of three column
          </Grid>

        </Row>
      </Container>
      </header>
    
    </div>
  );
}

export default App;
