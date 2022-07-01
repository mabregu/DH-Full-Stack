const listPlatos = [
    {
        id: 1,
        titulo: "Carpaccio fresco",
        description: "Entrada Carpaccio de salmón con cítricos",
        price: "65.50",
        currency: "U$S",
    },
    {
        id: 2,
        titulo: "Risotto de berenjena",
        description: "Risotto de berenjena y queso de cabra",
        price: "47.00",
        currency: "U$S",
    },{
        id: 3,
        titulo: "Mousse de arroz",
        description: "Mousse de arroz con leche y aroma de azahar",
        price: "27.50",
        currency: "U$S",
    },{
        id: 4,
        titulo: "Espárragos blancos",
        description: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        price: "37.50",
        currency: "U$S",
        image: "esparragos.png"
    },{
        id: 5,
        titulo: "Fideo con tuco",
        description: "Fideo con tuco de pollo y queso de cabra",
        price: "37.50",
        currency: "U$S",
    },{
        id: 6,
        titulo: "Mila con frita a caballo",
        description: "Mila con frita a caballo y queso de cabra - una bomba papá",
        price: "150.00",
        currency: "$",
        image: "mila.jpg"
    }
]

const mainController = {
    index: (req, res) => {
        res.render("index", { menu: listPlatos });
    },
    detalle: (req, res) => {
        const id = req.params.id;
        const plato = listPlatos.find(plato => plato.id == id);
        res.render("detalleMenu", { plato });
    }
}

module.exports = mainController;