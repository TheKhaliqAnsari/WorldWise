require('dotenv').config({path: ['../.env']})
module.exports = {
    port : process.env.PORT,
    db_url :  process.env.MONGODB_URL,
    secretToken : process.env.secretToken,
    accessExpirationMinutes : process.env.accessExpirationMinutes
}