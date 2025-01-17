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
    <h1 className="text-center mt-2">Seleziona la tua città</h1>
    <Form.Select aria-label="Meteo chooser dropdown" value={this.state.City} 
    onChange={
        this.cityChange}>
    <option >Rome</option>
    <option>Milano</option>
    <option>Venezia</option>
    <option >Bari</option>
    <option >Bologna</option>
    <option >Verona</option>
  </Form.Select>
 </Col>
</Row>
<Row className="justify-content-center">
  <Col xs={12} md={8}>
    <MeteoCard meteoCity={this.state.City}/>
  </Col>
</Row>
</Container>
  )
}
};


export default MeteoHome;
