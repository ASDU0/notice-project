import '../styles/cardnotice.css';

function CardNotice( {title, employer_name, location, img} ) {
  return (
    <div className="card-notice">
      <img src={img} alt="employee-image" />
      <div className="info">
        <h4>{ title }</h4>
        <div className="place">
          <p>{ employer_name }</p>
          <p>{ location }</p>
        </div>
        <div className="time">
          <p>Hace 21 horas</p>
        </div>
      </div>
    </div>
  )
}

export default CardNotice;