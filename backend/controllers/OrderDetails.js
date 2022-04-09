const Order = require('../models/Order');
const OrderDetails = require('../models/OrderDetails');

exports.getOrderDetailsRestaurant = (req, res, next) => {
    OrderDetails.find({"food.restaurant._id": req.params.userId, $or: [
        { "status": null },
        { "status": "in progress" }
    ]}).sort({ "order.dateOrder": -1 }).lean()
    .then(orderDetails => {
        res.status(200).json(orderDetails);
    })
    .catch(error => res.status(500).json({ error: error.message }))
}

exports.getOrderDetailsReadyRestaurant = (req, res, next) => {
    OrderDetails.find({"food.restaurant._id": req.params.userId, "status": "ready" }).sort({ "order.dateOrder": -1 }).lean()
    .then(orderDetails => {
        res.status(200).json(orderDetails);
    })
    .catch(error => res.status(500).json({ error: error.message }))
}

exports.updateOrderDetails = (req, res, next) => {
    OrderDetails.updateOne({ "_id": req.params.id }, { ...req.body })
    .then(data => {
        res.status(200).json({ message: "Order status updated !" });
    })
    .catch(error => res.status(400).json({ error: error.message }))
}