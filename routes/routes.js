const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.get('/', vehicleController.renderForm);
router.post('/add-vehicle', vehicleController.addVehicle);
router.get('/vehicleList', vehicleController.vehicleList);
router.get('/search', vehicleController.getVehicleById);
module.exports = router;
