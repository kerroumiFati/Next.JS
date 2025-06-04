// services/deliveryService.js

class DeliveryService {
    static async getDeliveryTime() {
      
      return  deliveryTime = await axios.get('/alert/deliveryTime');
    
    }
  }
  
  module.exports = DeliveryService;
  