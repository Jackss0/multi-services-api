const {Router} = require('express')
const router = Router();

router.get('/test', (req, res) =>{
const data = {
                "name": "Pepega",
                "website" : "Pepega.com"
             }

    res.json(data);
});


module.exports= router;