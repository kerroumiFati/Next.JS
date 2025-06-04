// components/DeliveryAlert.js

import { useEffect, useState } from 'react';
import DeliveryService from '@/services/deliveryService';
const DeliveryAlert = () => {
  const [deliveryTime, setDeliveryTime] = useState(null);

  useEffect(() => {
    // Fetch delivery time from your API endpoint
    const fetchDeliveryTime = async () => {
      try {
        const response = DeliveryService.getDeliveryTime () // Replace this with your actual API endpoint
        if (response.ok) {
          const data = await response.json();
          setDeliveryTime(data.deliveryTime); // Assuming the API returns deliveryTime
        } else {
          throw new Error('Failed to fetch delivery time');
        }
      } catch (error) {
        console.error('Error fetching delivery time:', error);
      }
    };

    fetchDeliveryTime();
  }, []);
  useEffect(() => {
    const remainingTime = calculateRemainingTime();
    if (remainingTime !== null) {
      const alertTimeout = setTimeout(() => {
        displayDeliveryAlert(remainingTime);
      }, 10000); // Adjust this timeout as needed
      return () => clearTimeout(alertTimeout);
    }
  }, [deliveryTime]);
  const calculateRemainingTime = () => {
    if (deliveryTime) {
      const now = new Date().getTime();
      const deliveryTimestamp = new Date(deliveryTime).getTime();
      return deliveryTimestamp - now;
    }
    return null;
  };

  const displayDeliveryAlert = (remainingTime) => {
    const minutesRemaining = Math.ceil(remainingTime / (1000 * 60));
    if (minutesRemaining > 0) {
      alert(`Your delivery will arrive in ${minutesRemaining} minutes.`);
    } else {
      alert('Your delivery has arrived!');
    }
  };

 

  return null; // This component doesn't render anything, it handles the alert logic
};

export default DeliveryAlert;
