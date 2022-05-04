const { mergeTypeDefs } = require('@graphql-tools/merge')
const {typeDefs} = require('./UserType')
// const productType = require('./productType')

const types = [typeDefs]

module.exports = mergeTypeDefs(types)