import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import SunnyIcon from '@mui/icons-material/Sunny';

import "./InfoBox.css";

export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1673191898695-8252d409d82c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

const HOT_URL = "https://images.unsplash.com/photo-1592216209828-3e536b50f349?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdCUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";
const COLD_URL = "https://plus.unsplash.com/premium_photo-1671127303935-6042d1d8fcd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";
const RAIN_URL = "https://images.unsplash.com/photo-1575262599417-5248f7719e3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";
    return(
<div className="InfoBox">
<div className='CardContainer'>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ info.humidity > 80 ? RAIN_URL : info.temp > 300  ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{
          info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 300  ? <SunnyIcon/> : <SevereColdIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
           <p>Temperature = {info.temp}&deg;C</p>
           <p>Humidity = {info.humidity}</p>
           <p>Min Temp = {info.tempMin}&deg;C</p>
           <p> Max Temp = {info.tempMax}&deg;C</p>
           <p>The Weather can be described as <b>{info.weather}</b> and feels like = {info.feelsLike}</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
</div>
    )
}