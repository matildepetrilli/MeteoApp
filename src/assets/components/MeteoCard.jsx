import {Component} from 'react'
import{Card, Button} from 'react-bootstrap'



class MeteoCard extends Component{
state={
    meteoData: {},
}
getMeteoData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.meteoCity}&appid=1f11b5ab697d3df7399a106878000956&units=metric`);
      if (response.ok) {
        const data = await response.json();
        console.log('dati da API', data); 
        this.setState({ meteoData: data }); 
      } else {
        throw new Error('Errore nella chiamata');
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  }

  componentDidMount() {
    this.getMeteoData();  
  }

  componentDidUpdate(prevProps) {
    if (prevProps.meteoCity !== this.props.meteoCity) {
      this.getMeteoData();
    }
  }

  render() {
    const { meteoData } = this.state;

    return (
      <Card className='bg-dark'>
        <Card.Body>
          {meteoData.name ? (
            <>
              <Card.Title className='text-light'>{meteoData.name}, {meteoData.sys?.country}</Card.Title>
              <Card.Text className='text-light'>
                <strong className="text-primary">Temperatura:</strong> {meteoData.main?.temp}°C
              </Card.Text>
              <Card.Text className='text-light'>
                <strong className="text-primary">Condizione:</strong> {meteoData.weather?.[0]?.description}
              </Card.Text>
            </>
          ) : (
            <Card.Text className='text-light'>Caricamento dati...</Card.Text>
          )}
          
          <Button variant="primary" href="./MeteoInfo">Info</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default MeteoCard;
