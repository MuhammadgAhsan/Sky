import Link from "next/link";

const Card = ({ icon, text, smalltext, btntext, phoneNumber }) => {
  const handleCall = () => {
    
    if (window.matchMedia("(max-width: 767px)").matches) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
    const skypeLink = `skype:${phoneNumber}?call`;
      window.location.href = skypeLink; 
    }
  };
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 text-center hover:transform hover:translate-y-1 hover:shadow-2xl transition-transform duration-300">
      {/* Icon Section */}
      <div className="mb-4">
        {icon}
      </div>

      {/* Service Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{text}</h2>

      {/* Service Description */}
      <h5 className="text-md text-gray-600 mb-4">{smalltext}</h5>

       {/* Call Us Button */}
       <button
        onClick={()=>handleCall(phoneNumber)}
        className="inline-block bg-green-500 text-white py-2 px-4 rounded-md text-lg font-semibold hover:bg-green-600 transition-colors"
      >
        {btntext}
      </button>

      {/* Fallback Phone Number for Manual Dial */}
      <p className="text-sm text-gray-500 mt-2">
        Or call us directly at <span className="font-medium">{phoneNumber}</span>
      </p>
    </div>
  );
};

export default Card;
