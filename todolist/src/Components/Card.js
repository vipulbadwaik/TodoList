const Card = (props) => {
  const { list } = props;

  return (
  
      <div className="card-area">

          <div className="card">{list}</div>
          <button className="Delete-btn">X</button>
      </div>
      

    
 
         
  );
};

export default Card;
