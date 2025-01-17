import { Component } from "react"
import { Form, Container ,Row,Col} from "react-bootstrap"
import MeteoCard from "./MeteoCard";


class MeteoHome extends Component{
    state={
        City:'Rome',
    }

    cityChange = (e) => {
        this.setState({ City: e.target.value });  // Aggiorna lo stato con la città selezionata
      }

    render(){
  return( 
    <Container>
<Row className="justify-content-center">
  <Col xs={12} md={8}>
    <h1 className="text-center text-light mt-2">Seleziona la tua città</h1>
    <Form.Select className="bg-dark" aria-label="Meteo chooser dropdown" value={this.state.City} 
    onChange={
        this.cityChange}>
    <option className="text-light">Rome</option>
    <option className="text-light">Milano</option>
    <option className="text-light">Venezia</option>
    <option className="text-light">Bari</option>
    <option className="text-light">Bologna</option>
    <option className="text-light">Verona</option>
  </Form.Select>
 </Col>
</Row>
<Row className="justify-content-center mt-3">
  <Col xs={12} md={8}>
    <MeteoCard meteoCity={this.state.City}/>
  </Col>
</Row>
</Container>
  )
}
};


export default MeteoHome;
