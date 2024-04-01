const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema')
const resolvers = require('./resolver')
const PORT = process.env.PORT || 3000;
const app = express();

const connectionString = "mongodb+srv://rodrigo:YHzLdkuvhwHQ8ZUZ@cluster0.bbqnvc3.mongodb.net/comp3133_assigment1?retryWrites=true&w=majority"

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(success => {
    console.log('Success Mongodb connection') 
  }).catch(err => {
    console.log('Error Mongodb connection')
  });


async function startServer(){
    try {
        const server = new ApolloServer({
            typeDefs,
            resolvers
        })
        await server.start()
        server.applyMiddleware({app})
        app.listen({ port: PORT }, () =>
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`))
    } catch(error){
        console.log(error)

    }
}
startServer()