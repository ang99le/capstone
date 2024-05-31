import { Link } from "react-router-dom";

const EventCard=({data})=>{
    


return(
    <>
    <h1>{data.Title}</h1>
    <Link to={`/EventsDetails/${data.id}`} state={data}>
        <img src={data.image} alt={data.Title}></img>
        <p>{data.description}</p>
    </Link>

    <button>Show Details</button>
    <button>Book Now</button>
    </>
)
}
export default EventCard;