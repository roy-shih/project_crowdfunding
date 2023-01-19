import React, { useState, useEffect } from 'react'
import { loader } from '../assets';
const Notification = () => {
  const [isLoading, setIsLoading] = useState(true);

  // countdown timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Notification (0)</h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have no notifications yet (coming soon)
          </p>
        )}
      </div>
    </div>
  )
}

export default Notification