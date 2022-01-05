import express from 'express';
const routes = express.Router();

routes.get('/', (req, res) => {
    res.render("home")
})

routes.get('/anchovy-lovers', (req, res) => {
    res.render("anchovy-lovers", {name: "Anchovy Lover's", price: "$15.00"})
})

routes.get('/paleo-pizza', (req, res) => {
    res.render("paleo-pizza", {name: "Paleo Pizza", price: "$20.00"})
})

routes.get('/dessert-pizza', (req, res) => {
    res.render("dessert-pizza", {name: "Dessert Pizza", price: "$18.00"})
})

routes.get('/review', (req, res) => {
    res.render('review')
})

routes.get('/review-submit', (req, res) => {
    let name = req.query.name
    let comment = req.query.comment
    let rating = req.query.rating
    res.render('review-submit',{name, comment, rating})
})

routes.get('/build-your-own', (req, res) => {
    res.render('build-your-own')
})

routes.get('/personal-pizza', (req, res) => {
    let size = req.query.size;
    let toppings = parseInt(req.query.number as string);
    let gluten = req.query.gluten? 'yes' : 'no';
    let note = req.query.special;
    let price = 0.00;
    if (size === "Large"){
        price = 12 + (1.25*toppings)
    } else if (size === "Medium"){
        price = 10 + toppings
    } else if (size === "Small"){
        price = 7 + (0.5*toppings)
    }
    price = Math.round(price*1e2)
    res.render('personal-pizza', {size, toppings, gluten, note, price})
})

export default routes;