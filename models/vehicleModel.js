const db = require('../config/db');

class Vehicle {
    static async addVehicle(make, model, km, color, location, value) {
        try {
            await db.execute('CALL InsertVehicle(?, ?, ?, ?, ?, ?)', 
                [make, model, km, color, location, value]);
        } catch (error) {
            console.error("Error inserting vehicle:", error);
            throw error;
        }
    }

    static async getAllVehicles() {
        try {
            const [vehicles] = await db.execute('CALL GetAllVehicles()');
            return vehicles[0]; 
        } catch (error) {
            console.error("Error fetching vehicles:", error);
            throw error;
        }
    }
    static async getVehicleById(id) {
        try {
            console.log("🔍 Executing GetVehicleById with ID:", id);
            const [vehicle] = await db.execute('CALL GetVehicleById(?)', [id]);
            return vehicle[0]?.[0] || null; // Handle empty result also
        } catch (error) {
            console.error("Error fetching vehicle by ID:", error);
            throw error;
        }
    }
}

module.exports = Vehicle;