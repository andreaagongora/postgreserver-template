// Aqui van las consultas de la bd
const db = require("../database/db");
const Customer = db.customer;

// Crear un nuevo customer
const createCustomer = async(req, res) => {
    try {
        const { customer_details } = req.body;
        const customer = await Customer.create(
            {
                // datos que va a recibir
                customer_details: customer_details
            },
            // datos que se va a retornar
            { fields: ['customer_id' ,'customer_details'] },
        );

        return res.send(customer)

    } catch (error) {
        console.log(error)
    }
}

// Obtener los customers
const getAllCustomer = async(req, res) => {
    try {
        const customer = await Customer.findAll();
        return res.send(customer)

    } catch (error) {
        console.log(error)
    }
}

// Obtener un customer
const getOneCustomer = async(req, res) => {
    try {
        const { id } = req.body
        const customer = await Customer.findByPk(id);
        if (customer === null) {
            console.log('Not found!');
            return 0
        } else {
            return res.send(customer)
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createCustomer,
    getAllCustomer,
    getOneCustomer
}


