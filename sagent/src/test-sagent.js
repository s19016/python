const sagent = require('superagent')
const URI = 'http://local/fruits.json'

const callback = (err, res) =>
    console.log(res.body.fruits)

sagent.get(URI)
    .then(res => res.body)
    .then(json => json.forms)
    .then(console.log)
console.log('test')