const {gql} = require('apollo-server-express')

const typeDefs = gql`

    type User {
        _id: String
        Name: String,
        Email: String,
        Age:Int
    }

    type Query {
        getAllUsers: [User!]!,
        getUserById(_id:String): User!
    }

    type Mutation {
        AddUser(Name:String, Email:String, Age:Int): User!,
        UpdateUser(_id:String,Name:String,Email:String,Age:Int): User!
    }

`

module.exports = {typeDefs}