const router = require('express').Router()
const { Tag, Product, ProductTag } = require('../../models')

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
    try {
        let tags = await Tag.findAll({
            include: [{ model: Product }]
        })
        res.json(tags)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        let tags = await Tag.findByPk(req.params.id, {
            include: [{ model: Product }]
        })
        res.json(tags)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        let tag = await Tag.create(req.body)
        res.json(tag)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let tag = await Tag.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json(tag)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let tag = await Tag.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json(tag)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router