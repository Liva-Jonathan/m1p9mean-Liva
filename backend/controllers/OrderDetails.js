const Order = require('../models/Order');
const OrderDetails = require('../models/OrderDetails');
const DeliveryMan = require('../models/DeliveryMan');

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

const updateOrderDetails = function(id, body) {
    return new Promise((resolve, reject) => {
        try {
            OrderDetails.updateOne({ "_id": id }, { ...body })
            .then(data => {
                resolve(data);
            })
            .catch(error => reject(error))
        } catch(error) {
            reject(error);
        }
    })
}

exports.updateOrderDetailsStatus = (req, res, next) => {
    try {
        if(req.body.status && req.body.status == "delivered"){
            DeliveryMan.findById(req.query.deliveryMan, { password: 0 }).lean()
            .then(deliveryMan => {
                if(!deliveryMan) return res.status(404).json({ error: 'Delivery Man not found !' })

                deliveryMan._id = deliveryMan._id.toString();
                req.body.deliveryMan = deliveryMan;
                updateOrderDetails(req.params.id, req.body)
                .then(data => {
                    res.status(200).json({ message: 'Order status updated !' })
                })
                .catch(error => res.status(400).json({ error: error.message }))
                })
            .catch(error => res.status(500).json({ error: error.message }))
        } else {
            updateOrderDetails(req.params.id, req.body)
            .then(data => {
                res.status(200).json({ message: 'Order status updated !' })
            })
            .catch(error => res.status(400).json({ error: error.message }))
        }
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

exports.getOrderDetailsReady = (req, res, next) => {
    OrderDetails.find({ "status": "ready" }).sort({ "order.dateOrder": -1 }).lean()
    .then(orderDetails => {
        res.status(200).json(orderDetails);
    })
    .catch(error => res.status(500).json({ error: error.message }))
}

exports.getOrderDetailsDeliveredDeliveryMan = (req, res, next) => {
    OrderDetails.find({ "status": "delivered", "deliveryMan._id": req.params.userId }).sort({ "order.dateOrder": -1 }).lean()
    .then(orderDetails => {
        res.status(200).json(orderDetails);
    })
    .catch(error => res.status(500).json({ error: error.message }))
}