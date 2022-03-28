/*** use e-kaly; ***/

db.client.insert([
    { _id: 1, name: "Rakoto", firstname: "Jean", address: "Lot 3 P Analakely", email: "jean@gmail.com", password: "$2a$10$0BAMMO1EGIjO11WYbofoEuNubRmzZOozERrpbxBcZA/3tTAwMHesq" },
    { _id: 2, name: "Rabe", firstname: "Koto", address: "Lot 2H Anosy", email: "koto@gmail.com", password: "$2a$10$JnXV4wKwbqRipDYvV2OxB.Kur.UPAhzf3.fXAMZm9Xp6XGDW7/nE2" },
    { _id: 3, name: "Rasolo", firstname: "Bema", address: "Lot IVK Ankadifotsy", email: "bema@gmail.com", password: "$2a$10$7neHlUrGMjHfCdes1I6eu.PFJqt3H1fhkJzjxYLV2Imth4tBglmua" }
])

db.restaurant.insert([
    { _id: 1, name: "The Capital Grille", address: "Lot 24 Ter Andoharanofotsy", email: "grille@yahoo.fr", password: "$2a$10$CUoe/uHQxodAvAflgYshD.4G2dB4VlKdupzPVwTcB6JKbi8PHFurS" },
    { _id: 2, name: "Gastronomie Pizza", address: "Lot IFJ 12 Bis Analakely", email: "gastro@yahoo.fr", password: "$2a$10$6kVeN83.km1DacrI7BqrH.PehvLehajvm6hbmtbJpdjgOwn8BJ63K" }
])

db.food.insert([
    { 
        _id: 1, name: "Banana split", price: 5000, image: "banana-split.jpg",
        description: "Like the banana makes it good for you. Still, kudos to whoever invented the variation of the sundae known as the banana split. There's the 1904 Latrobe, Pennsylvania, story, in which future optometrist David Strickler was experimenting with sundaes at a pharmacy soda fountain, split a banana lengthwise, and put it in a long boat dish.",
        idRestaurant: 1
    },
    { 
        _id: 2, name: "Burger", price: 10000, image: "burger.jpg",
        description: "Un hamburger (initialement hamburg-er, soit « galette de Hambourg » en allemand, et non pas « galette de jambon » en anglais) ou par aphérèse burger, est un sandwich d'origine allemande, composé de deux pains de forme ronde (bun) généralement garnis de steak haché (généralement du bœuf) et de crudités, salade, tomate, ...",
        idRestaurant: 1
    },
    { 
        _id: 3, name: "Tacos", price: 7000, image: "tacos.jpg",
        description: "Un taco est un antojito de la cuisine mexicaine qui se compose d'une tortilla de maïs repliée ou enroulée sur elle-même contenant presque toujours une garniture le plus souvent à base de viande, de sauce, d'oignon et de coriandre fraiche hachée. Les tacos se mangent généralement sans couverts, avec les doigts.",
        idRestaurant: 2
    },
    { 
        _id: 4, name: "Pizza", price: 12000, image: "pizza.jpg",
        description: "La pizza est une recette de cuisine traditionnelle de la cuisine italienne, originaire de Naples à base de galette de pâte à pain, garnie de divers mélanges d'ingrédients (sauce tomate, tomates séchées, légumes, fromage, charcuterie, olives, huile d'olive…) et cuite au four.",
        idRestaurant: 2
    },
])

db.deliveryMan.insert([
    { _id: 1, name: "Gabriel", firstname: "James", email: "james@gmail.com", password: "$2a$10$QUB6qZaYRY8x67ZExgl.8uWgqno8j.0vZEoUGhYccGW7fmvx4MPxm" },
    { _id: 2, name: "Daniel", firstname: "Noa", email: "noa@gmail.com", password: "$2a$10$/3XQGFM9Vk8y85Rlm2rvMuBPxsLlQvLBgsGcSlVwk6LnLHm/O3jzC" },
])

db.manager.insert([
    { _id: 1, name: "Nicolas", firstname: "Pepe", email: "pepe@yahoo.fr", password: "$2a$10$j4iwmqHLZK4PO1hVXbbw4.osaDcdR61LqEoM9nxovaezdzvIZaktO" }
])

db.orderCounter.insert({
    _id: "entry",
    sequence: 1
})

db.order.insert([
    { 
        _id: 1,
        numOrder: "ORD1",
        dateOrder: new Date("2022-03-28T08:00:00"),
        client: {
            idClient: 1,
            name: "Rakoto",
            firstname: "Jean",
            address: "Lot 3 P Analakely",
            email: "jean@gmail.com"
        }
    },
    { 
        _id: 2,
        numOrder: "ORD2",
        dateOrder: new Date("2022-03-28T12:30:00"),
        client: {
            idClient: 2,
            name: "Rabe",
            firstname: "Koto",
            address: "Lot 2H Anosy",
            email: "koto@gmail.com"
        }
    }
])

db.orderDetails.insert([
    {
        _id: 1,
        order: {
            idOrder: 1,
            numOrder: "ORD1",
            dateOrder: new Date("2022-03-28T08:00:00"),
            client: {
                idClient: 1,
                name: "Rakoto",
                firstname: "Jean",
                address: "Lot 3 P Analakely",
                email: "jean@gmail.com"
            },
        },
        food: {
            idFood: 1,
            name: "Banana split", price: 5000, image: "banana-split.jpg",
            restaurant: {
                idRestaurant: 1,
                name: "The Capital Grille",
                address: "Lot 24 Ter Andoharanofotsy",
                email: "grille@yahoo.fr"
            }
        },
        quantity: 2,
    },
    {
        _id: 2,
        order: {
            idOrder: 1,
            numOrder: "ORD1",
            dateOrder: new Date("2022-03-28T08:00:00"),
            client: {
                idClient: 1,
                name: "Rakoto",
                firstname: "Jean",
                address: "Lot 3 P Analakely",
                email: "jean@gmail.com"
            },
        },
        food: {
            idFood: 4,
            name: "Pizza", price: 12000, image: "pizza.jpg",
            restaurant: {
                idRestaurant: 2,
                name: "Gastronomie Pizza",
                address: "Lot IFJ 12 Bis Analakely",
                email: "gastro@yahoo.fr"
            }
        },
        quantity: 3,
        status: "ready"
    },
    {
        _id: 3,
        order: {
            idOrder: 2,
            numOrder: "ORD2",
            dateOrder: new Date("2022-03-28T12:30:00"),
            client: {
                idClient: 2,
                name: "Rabe",
                firstname: "Koto",
                address: "Lot 2H Anosy",
                email: "koto@gmail.com"
            },
        },
        food: {
            idFood: 2,
            name: "Burger", price: 10000, image: "burger.jpg",
            restaurant: {
                idRestaurant: 1,
                name: "The Capital Grille",
                address: "Lot 24 Ter Andoharanofotsy",
                email: "grille@yahoo.fr"
            }
        },
        quantity: 2,
        status: "delivered",
        deliveryMan: {
            idDeliveryMan: 2,
            name: "Daniel", firstname: "Noa", email: "noa@gmail.com"
        }
    }
])

// db.order.aggregate([
//     { $project: { field: { $concat: ["a", "b"] } } }
// ])