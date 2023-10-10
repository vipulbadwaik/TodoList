const Card = (props) => {
  const { list } = props;

  return (
  
      <div className="w-full flex">

          <div className="bg-[#be7ee4] p-3 m-3 rounded-md w-4/5 break-words">{list}</div>
          <button className="m-3 w-1/5 bg-black text-white rounded-xl">X</button>
      </div>
      

    
 
         
  );
};

export default Card;
