const Card = ({list, rem}) => {
  // const { list } = props;

  const handleClick = () =>{
    rem();
  }

  return (
    <div className="w-full flex mt-6">
      <div className="bg-[#be7ee4] p-3 m-3 rounded-md w-4/5 break-words">
        {list}
      </div>
      <div className="w-1/5 ">
      <button className="m-4 px-5 py-2 bg-black text-white rounded-xl hover:shadow-lg hover:shadow-stone-950 " onClick={handleClick}>X</button>
      </div>
     
    </div>
  );
};

export default Card;
