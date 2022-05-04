const dotenv = require('dotenv')
dotenv.config()

const {ApolloServer} = require('apollo-server-express')
const express = require('express')
const typeDefs = require('./GraphQL/TypeDefs/index')
const resolvers = require('./GraphQL/Resolvers/index')
const dbConnection = require('./config/dbConfig')



const app = express()

dbConnection()
const server = new ApolloServer(
    { typeDefs, resolvers}
)

server.applyMiddleware({app})

const port = 5000
app.listen(port,()=>{
    console.log('server is running on port: 5000')
})