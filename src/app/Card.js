// components/Card.js

const Card = ({ title, image, description }) => {
    return (
      <div className="flex bg-[#212121] border border-white rounded-lg shadow-lg overflow-hidden w-full sm:w-96 mx-2 min-w-[350px]">
        <img src={image} alt={title} className="w-1/3 object-cover" />
        <div className="flex flex-col justify-between p-4 w-2/3">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
          <a 
            href="#" 
            className="text-center text-white border-t border-white py-2 mt-2 hover:bg-gray-700"
          >
            Read
          </a>
        </div>
      </div>
    );
  };
  
  export default Card;
  