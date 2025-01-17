import { Component } from "react"
import { Form, Container ,Row,Col} from "react-bootstrap"
import MeteoCard from "./assets/components/MeteoCard";


class MeteoHome extends Component{
    state={
        meteoCity:'Rome',
    }

    render(){
  return( 
    <Container>
<Row className="justify-content-center">
  <Col xs={12} md={8}>
    <h1 className="text-center mt-2">Seleziona la tua città</h1>
    <Form.Select aria-label="Meteo chooser dropdown" value={this.state.meteoCity} 
    onChange={e=>{
        this.setState({meteoCity:e.target.value,})}}>
    <option>Rome</option>
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
    <MeteoCard meteoCity={this.state.meteoCity}/>
  </Col>
</Row>
</Container>
  )
}
};


export default MeteoHome;
