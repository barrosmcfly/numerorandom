function getRandom(req, res){
    const aleatorio = Math.floor( Math.random()*100 );
    res.status(200).send(''+aleatorio)
}

function getRandomTo(req, res){
    const val = req.params.val
    const aleatorio = Math.floor( Math.random()*val );
    res.status(200).send(''+aleatorio)
}

function getRandomBetween(req, res){
    const min = parseInt(req.query.min)
    const max = parseInt(req.query.max)+1
    const aleatorio = Math.floor(Math.random() * (max - min)) + min;
    res.status(200).send(''+aleatorio)
}

module.exports = {getRandom,getRandomTo,getRandomBetween }