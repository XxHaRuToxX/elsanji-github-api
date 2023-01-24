import app from './app';

const main = async () =>{
    try {
        app.listen(process.env.PORT || 3000);
        console.log('Server listening on port =>', process.env.PORT);
    } catch (error) {
        if(error instanceof Error) {
            console.log(error.message.toString());
        }
    }
}

main();