// controllers/deliveryController.js

const DeliveryService = require('../services/deliveryService');

class DeliveryController {
  static async fetchDeliveryTime(req, res) {
    try {
      const deliveryTime = await DeliveryService.getDeliveryTime();
      res.status(200).json({ deliveryTime });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = DeliveryController;
