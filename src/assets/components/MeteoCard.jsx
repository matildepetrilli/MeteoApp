import {Component} from 'react'
import{Card, Button} from 'react-bootstrap'

const URL='https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid=1f11b5ab697d3df7399a106878000956'

class MeteoCard extends Component{

state={
    meteoData: {},
}

getmeteoData= async() =>{
    try{
const response = await fetch (URL + this.prop.meteoCity)
if(response.ok){
   const data= await response.json()
   console.log('dati da API',data.id)
   this.setState.id
}else {throw new Error ('errore nella chiamata')}
    }catch(error){
        console.log('ERROR',error)
    }
}

componentDidMount(){this.getmeteoData()}

render(){
    return(
        <Card >
        <Card.Body>
          <Card.Title>{this.state.meteoData.name}</Card.Title>
          <Card.Text>{this.state.meteoData.main}
          </Card.Text>
          <Card.Text>{this.state.meteoData.weather}
          </Card.Text>
          
          <Button variant="primary">Info</Button>
        </Card.Body>
      </Card>
    )
}
}

export default MeteoCard;