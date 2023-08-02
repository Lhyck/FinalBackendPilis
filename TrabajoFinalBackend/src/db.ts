
import { DataSource } from "typeorm";
import app from "./app";
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type:"mysql",
    host:"localhost",
    port: 3306,
    username:"root",
    password:"mysql",
    database:"ticket-system-db",
    ///logging:true,
    synchronize:true,
    entities:[User],
});
