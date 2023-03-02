import { config } from "dotenv";
config();
import fastify from "fastify";
import cors from "@fastify/cors";
import { userRoutes } from "./routes/users";

const app = fastify(); //instance

app.register(cors, { origin: process.env.CLIENT_URL }); //cors origin requests, requests from other domains
//app.register is a method in the Fastify framework used to register a plugin or a group of routes with a Fastify application instance.
app.register(userRoutes); // It registers the userRoutes function with the app, which defines the /signup route for user signups.

app.listen({ port: parseInt(process.env.PORT!) }); //! makes sure the string is defined
