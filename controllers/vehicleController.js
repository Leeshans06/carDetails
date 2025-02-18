const Vehicle = require('../models/vehicleModel');

exports.renderForm = (req, res) => {
   // res.render('form', { message: null });
    res.render('layout', { message: null, body: "form" });
};

exports.addVehicle = async (req, res) => {
    const { make, model, km, color, location, value } = req.body;
    try {
        await Vehicle.addVehicle(make, model, km, color, location, value);
        res.render('layout', { message: 'Vehicle captured successfully!',body:'form' });
        
    } catch (error) {    
        res.render('layout', { message: 'Error capturing vehicle',body:'form' });
    }
};

exports.vehicleList = async (req, res) => {
    try {
        const vehicles = await Vehicle.getAllVehicles();
        res.render('layout', { 
            title: "Vehicle List", 
            body: 'vehicleList',  // Reference the view file
            vehicles // Pass vehicle data
        });
    } catch (error) {
        res.send('Error fetching vehicle data');
    }
};
exports.getVehicleById = async (req, res) => {
    try {
        const { id } = req.query;  // Extract `id` from query parameters

        if (!id) {
            console.log("No Id provided in search.");
            return res.redirect('/vehicles'); //Redirect to full list if no Id is provided
        }

        console.log("Executing GetVehicleById with ID:", id);

        const vehicles = await Vehicle.getVehicleById(id);

        console.log("Vehicle found:", vehicles);

        //res.render('vehicleList', { vehicles: vehicles ? [vehicles] : [] });  //Ensure its always an array

        res.render('layout', { 
            title: "Vehicle List", 
            body: 'vehicleList',  // Reference the view file
            vehicles: vehicles ? [vehicles] : [] // Pass vehicle data
        });
    } catch (error) {
        console.error("Error fetching vehicle data:", error);
        res.send('Error fetching vehicle data: ' + error.message);
    }
};