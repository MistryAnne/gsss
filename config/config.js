/*const config = {
env: process.env.NODE_ENV || 'development', 
port: process.env.PORT || 3000,
jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
mongoUri: process.env.MONGODB_URI ||
process.env.MONGO_HOST ||
'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
'/mernproject' 
}
export default config*/

const config = {
 env: process.env.NODE_ENV || 'development', 
 port: process.env.PORT || 3000,
 jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
 mongoUri: process.env.MONGODB_URI || "mongodb+srv://amistr34:nMBbfpvr2x4E3qHR@cluster0.6zy0j6n.mongodb.net/Global_Survey?retryWrites=true&w=majority"||
process.env.MONGO_HOST ||
 'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
 '/mernproject' 
 }
 export default config
