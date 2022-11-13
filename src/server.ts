import App from './app';

let port = process.env.PORT || 3000;

App.app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});