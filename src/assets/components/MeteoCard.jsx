import {Component} from 'react'
import{Card, Button} from 'react-bootstrap'

const URL='https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid=1f11b5ab697d3df7399a106878000956'

class MeteoCard extends Component{

state={
    meteoData: {},
}

getmeteoData= async() =>{
    try{
const response = await fetch(URL + this.props.meteoCity)
if(response.ok){
   const data= await response.json()
   console.log('dati da API',data)
}else {throw new Error ('errore nella chiamata')}
    }catch(error){
        console.log('ERROR',error)
    }
}

componentDidMount(){this.getmeteoData()}

render(){
    return(
        <Card >
        <Card.Img variant="top" src="https://placecats.com/300/300" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}
}

export default MeteoCard;