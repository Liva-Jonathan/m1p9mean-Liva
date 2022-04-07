const Food = require('../models/Food');

const utils = require('../services/Utils');

const joinRestaurantAddFields = {
    $addFields: {
        _id: { $toString: "$_id" },
        idRestaurant: { $toObjectId: "$idRestaurant" }
    }
}

const joinRestaurantLookup = {
    $lookup: {
        from: "restaurant",
        localField: "idRestaurant",
        foreignField: "_id",
        as: "restaurant"
    }
}

exports.getAllFoods = (req, res) => {
    Food.aggregate([joinRestaurantAddFields, joinRestaurantLookup, {$unwind: '$restaurant'}])
    .then(foods => res.status(200).json(foods))
    .catch(error => {
        console.log(error);
        res.status(400).json({ error : error.message });
    })
}

exports.getOneFood = (req, res) => {
    Food.aggregate([joinRestaurantAddFields, joinRestaurantLookup, {$unwind: '$restaurant'}, {
        $match: {
            "_id": req.params.foodId
        }
    }])
    .then(foods => {
        if(!foods[0]) throw new Error("Unexisting Food !");
        res.status(200).json(foods[0]);
    })
    .catch(error => {
        res.status(400).json({ error : error.message });
    })
}

exports.evaluateOrder = (req, res) => {
    let foodOrders = req.body;
    let foodsId = foodOrders.map(f => f.foodId);
    utils.sortObjectArray(foodOrders, 'foodId', 1);

    Food.aggregate([joinRestaurantAddFields, joinRestaurantLookup, {$unwind: '$restaurant'}, {
        $match:{
            "_id": { $in: foodsId }
        }
    },
    {
        $sort: { _id: 1 }
    }
    ])
    .then(foods => {
        let amountTotal = 0;
        for(let i=0; i < foods.length; i++) {
            foods[i].quantity = foodOrders[i].quantity;
            foods[i].amount = foods[i].price * foods[i].quantity;
            amountTotal += foods[i].amount;
        }
        const orders = {
            foods: foods,
            amountTotal: amountTotal
        }
        res.status(200).json(orders);
    })
    .catch(error => {
        res.status(400).json({ error : error.message });
    })
}
