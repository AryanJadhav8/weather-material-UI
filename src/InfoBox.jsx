import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
const INIT_URL = 'https://plus.unsplash.com/premium_photo-1678066986924-120fdbdf3439?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww';
const HOT_URL = 'https://images.unsplash.com/photo-1566773333308-d2989f01cbc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D';
const COLD_URL = 'https://images.unsplash.com/photo-1603726574752-a85dc808deab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww';
const RAIN_URL = 'https://plus.unsplash.com/premium_photo-1666700698920-d2d2bba589f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhaW55JTIwc3RyZWV0fGVufDB8fDB8fHww';



    return(
    <div className="InfoBox">
        <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                         info.humidity > 80
                         ? RAIN_URL
                         : info.temp > 15
                         ? HOT_URL
                         :COLD_URL
                        }
                    title="green iguana"
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city} {
                    info.humidity > 80
                         ? <ThunderstormIcon/>
                         : info.temp > 15
                         ? <SunnyIcon/>
                         :<AcUnitIcon/>
                }
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                
                </Typography>
            </CardContent>
            </Card>
    </div>
    </div>
    );
}