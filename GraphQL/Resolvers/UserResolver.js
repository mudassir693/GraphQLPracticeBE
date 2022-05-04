const User = require('../../models/User')

const dummyData = [{ 
    Name: "Ali",
    Email:"ali@gmail.com",
    Age:21
},
{ 
    Name: "Ali",
    Email:"ali@gmail.com",
    Age:21
}];
const resolvers = {
    Query: {
        getAllUsers:async ()=>{
            // console.log(dummyData);
            const resp = await User.find()
            return resp
        },
        getUserById: async (parent,args)=>{
            const resp = await User.findById(args._id)
            return resp
        }

    },
    Mutation: {
        async AddUser(parent,args){
            // console.log(args)

            const newUser = await User({
                Name:args.Name,
                Email:args.Email,
                Age:args.Age
            })

            const resp = await newUser.save()
            return resp
        },
        async UpdateUser(parent,args) {
            const updUsr = {
                Name: args.Name,
                Email:args.Email,
                Age: args.Age
            }
            const respUser = await User.findByIdAndUpdate(args._id,{$set: updUsr},{new:true})

            return respUser
        }
    }
}

module.exports = resolvers