const { Router } = require('express')

const router = Router()

router.get('/testpage/:id', function (req, res, next) {
    let OutputID = {
        id: String(req.params.id),
        Message: 'Соединение с сервером успешно установлено. Введенный параметр:'
    }
    res.send( OutputID )
})
module.exports = router
