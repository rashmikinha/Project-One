const RestroCard = ({ restro, key }) => {
    return (
      <div className="rostrocard-container" key={key}>
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${restro.imageId}`} alt={restro.accessibility.altText} />
      </div>
    );
  };
  
  export default RestroCard;