const router = require('express').Router()
const { Category, Product } = require('../../models')

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
    try {
        let categories = await Category.findAll({
            include: [{ model: Product }]
        })
        res.json(categories)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        let category = await Category.findByPk(req.params.id, {
            include: [{ model: Product }]
        })
        res.json(category)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        let category = await Category.create(req.body)
        res.json(category)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let category = await Category.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json(category)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let category = await Category.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json(category)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router