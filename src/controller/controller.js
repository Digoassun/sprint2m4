const controller = (app, db) => {
    app.get('/tips', (req, res) => {
        res.json({
            "tip": db.tips[Math.floor(Math.random() * db.tips.length)]
        })
    })

    app.post('/create', (req, res) => {
        console.log('Create acessada')
        const body = req.body
        db.tips.push(body.tip)
        res.json(body)
    })
}
export default controller