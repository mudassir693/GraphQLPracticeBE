const { mergeResolvers  } = require('@graphql-tools/merge')
const UserResolver = require('./UserResolver')
// const productType = require('./productType')

// const types = [typeDefs]

const resolvers = [UserResolver]

module.exports = mergeResolvers(resolvers)