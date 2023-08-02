import "reflect-metadata"
import app from './app';
import {AppDataSource} from "./db";
const port = 3000
/** 
///rutas
app.use('users', require('./routes/users.routes'));
app.use('events', require('./routes/events.routes'));
app.use('tickets', require('./routes/tickets.routes'));
*/


async function main (){
    try {
        await AppDataSource.initialize();
        console.log('Database Connected ...');
        app.listen(port,() => console.log('App listening on port ${port}!')
    )}catch (error) {
        console.error(error);
    }
    }
/*
app.listen(port, () => {
    console.log('Iniciando aplicaciono: ' + port);
});
*/

main()