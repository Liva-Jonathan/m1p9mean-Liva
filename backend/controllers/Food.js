const Food = require('../models/Food');

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
    Food.aggregate([joinRestaurantAddFields, joinRestaurantLookup, {
        $match: {
            "_id": req.params.foodId
        }
    }])
    .then(foods => res.status(200).json(foods))
    .catch(error => {
        console.log(error);
        res.status(400).json({ error : error.message });
    })
}
