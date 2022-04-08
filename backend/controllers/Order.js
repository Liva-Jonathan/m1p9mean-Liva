const Order = require('../models/Order');
const OrderCounter = require('../models/OrderCounter');
const Client = require('../models/Client');
const OrderDetails = require('../models/OrderDetails');

const foodCtrl = require('../controllers/Food');

exports.createOrder = (req, res, next) => {
    OrderCounter.findOneAndUpdate(
        { _id: "entry" },
        { $inc: { sequence: 1 } },
        { new: true }
    )
    .then(counter => {
        Client.findById(req.user.userId, { password:0 })
        .then(client => {
            const order = new Order({
                numOrder: 'ORD' + counter.sequence,
                dateOrder: new Date(),
                client: client
            });
            order.save()
            .then((data) => {
                createOrderDetails(data, req, res);
            })
            .catch(error => res.status(400).json({ error: error.message }));
        })
        .catch(error => res.status(500).json({ error : error.message }))
    })
    .catch(error => res.status(500).json({ error : error.message }))
}

const createOrderDetails = (order, req, res) => {
    let foodOrders = req.body;
    foodCtrl.getEvaluationOrder(foodOrders)
    .then(orders => {
        let foods = orders.foods;
        const orderDetailsArray = [];
        for(let i=0; i<foods.length; i++) {
            const orderDetails = new OrderDetails({
                order: order,
                food: foods[i],
                quantity: foods[i].quantity
            });
            orderDetailsArray.push(orderDetails);
        }
        OrderDetails.insertMany(orderDetailsArray)
        .then(docs => {
            res.status(201).json({ message: 'Orders created' });
        })
        .catch(error => res.status(500).json({ error : error.message }))
    })
    .catch(error => {
        res.status(500).json({ error : error.message });
    })
}