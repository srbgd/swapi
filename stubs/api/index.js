const router = require('express').Router()
const API = require('./api.js');

const retrive = (resource, id) => {
    return resource in API ? API[resource][id] : null
}

router.get('/films/:id', (req, res) => {
    res.send(retrive('films', req.params.id))
})

router.get('/people/:id', (req, res) => {
    res.send(retrive('people', req.params.id))
})

router.get('/planets/:id', (req, res) => {
    res.send(retrive('planets', req.params.id))
})

router.get('/species/:id', (req, res) => {
    res.send(retrive('species', req.params.id))
})

router.get('/starships/:id', (req, res) => {
    res.send(retrive('starships', req.params.id))
})
router.get('/vehicles/:id', (req, res) => {
    res.send(retrive('vehicles', req.params.id))
})

module.exports = router
