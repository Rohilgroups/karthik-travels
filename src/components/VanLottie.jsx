import Lottie from 'lottie-react';
import animationData from '../assets/Lottie/Van Morphing Animation.json';

const VanLottie = ({ className = "" }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        style={{ height: '100%' }}
        className="w-auto max-w-[400px]"
      />
    </div>
  );
};

export default VanLottie;
