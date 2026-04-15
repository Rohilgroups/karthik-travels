import Lottie from 'lottie-react';
import animationData from '../assets/Lottie/loading.json';

const TravelLottie = ({ className = "" }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        style={{ height: '100%' }}
        className="w-auto max-w-[200px]"
      />
    </div>
  );
};

export default TravelLottie;
