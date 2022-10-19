import '../style.css'
import TagImg from '../assets/tag.png'

export default function Card(props){
    return(
        <div className='card'>
            <img src={props.imageUrl} alt=""  className='card-image'/>
            <div>
                <div className='card-top'>
                    <img src={TagImg} alt="" />
                    <span>{props.location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h3 className='card-title'>{props.title}</h3>
                <span className='card-date'>{props.startDate} - {props.endDate}</span>
                <p>{props.description}</p>
            </div>
        </div>
    )
}