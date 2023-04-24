const Card = ({pInfo}) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
    <figure>
      <img src={pInfo.ImageSrc} alt="" />
    </figure>
    
    <div className="card-body">
      <h2 className="card-title">{pInfo.ProductName}</h2>
      <p>{pInfo.Price}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  );
};

export default Card;
