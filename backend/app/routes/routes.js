const {ObjectID} = require("mongodb");

module.exports = function (app, db) {
    
// Новости
    app.post('/news/add', (req, res) => { //Добавление новой новости
            const news = {                
                title: req.body.title,
                text: req.body.text,
                img: req.body.img,
                date: req.body.date,                
            };
            db.collection('news').insertOne(news, (err, result) => {
                console.log('news', news)
                if (err) {
                    console.log('ERROR',err)
                    res.send({
                        'error': 'An error has occurred'
                    });
                } else {                       
                    res.send(result.ops);                   
                }
            });
    });

    app.get('/news/red', (req, res) => { //Чтение всех новостей
        db.collection('news').find({}).toArray(function(err, result) { //нахождение всех элементов массива
            if (err) { //если ошибка
                console.log('WTFERR',err)
                res.send({
                    'error': 'An error has occurred'
                });
            } else {  
                db.collection('news').countDocuments().then((count) => {                            
                res.send(result); //вывод всего  
                });
            }
        });
    }); 

    app.post('/news/redid', (req, res) => {//Чтение конкретной новости по id
        const id = req.body.id;
        const details = {
            '_id': new ObjectID(id)
        };
        db.collection('news').findOne(details, (err, item) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {                   
                res.send(item);               
            }
        });
    });

    app.post('/news/delete', (req, res) => { //Удаление новости
        const id = req.body.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('news').remove(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {                    
                res.send('News '+id+' deleted!');        
            }
        });
    });

     app.post('/news/update', (req, res) => { //Редактирование новости
        const id = req.body.id;
        const details = {
            '_id': new ObjectID(id)
        };
        const news = {
            title: req.body.title,
            text: req.body.text,
            img: req.body.img,
            date: req.body.date,   
        };
        db.collection('news').updateOne(details, { $set: news },(err, result) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send(news);
            }
        });
    });


// Книги
    app.post('/book/add', (req, res) => { //Добавление новой книги
                const book = {  
                    Author: req.body.Author,
                    School: req.body.School,
                    Series: req.body.Series,
                    Title: req.body.Title,
                    RepType: req.body.RepType,
                    Volume: req.body.Volume,
                    Year: req.body.Year,
                    URL: req.body.URL,
                    Custom1: req.body.Custom1,
                    Custom2: req.body.Custom2,
                    price: req.body.price,               
                };
                db.collection('book').insertOne(book, (err, result) => {
                    console.log('book', book)
                    if (err) {
                        console.log('ERROR',err)
                        res.send({
                            'error': 'An error has occurred'
                        });
                    } else {                       
                        res.send(result.ops);                   
                    }
                });
        });

    app.get('/book/red', (req, res) => { //Чтение всех книг
        db.collection('book').find({}).toArray(function(err, result) { //нахождение всех элементов массива
            if (err) { //если ошибка
                console.log('WTFERR',err)
                res.send({
                    'error': 'An error has occurred'
                });
            } else {  
                db.collection('book').countDocuments().then((count) => {                            
                res.send(result); //вывод всего  
                });
            }
        });
    }); 

    app.post('/book/redid', (req, res) => {//Чтение конкретной книги по id
        const id = req.body.id;
        const details = {
            '_id': new ObjectID(id)
        };
        db.collection('book').findOne(details, (err, item) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {                   
                res.send(item);
            }
        });
    });

    
// Пользователи
    app.post('/users/add', (req, res) => { //Добавление нового пользователя
        const users = {                
            surname: req.body.surname,
            name: req.body.name,
            patronymic: req.body.patronymic,
            telephone: req.body.telephone, 
            email: req.body.email,   
            password: req.body.password,                   
        };
        db.collection('users').insertOne(users, (err, result) => {
            console.log('users', users)
            if (err) {
                console.log('ERROR',err)
                res.send({
                    'error': 'An error has occurred'
                });
            } else {                       
                res.send(result.ops);                   
            }
        });
    });

    app.get('/users/red', (req, res) => { //Чтение всех пользователей
        db.collection('users').find({}).toArray(function(err, result) { //нахождение всех элементов массива
            if (err) { //если ошибка
                console.log('WTFERR',err)
                res.send({
                    'error': 'An error has occurred'
                });
            } else {  
                db.collection('users').countDocuments().then((count) => {                            
                res.send(result); //вывод всего  
                });
            }
        });
    }); 

    app.post('/users/redid', (req, res) => {//Чтение конкретного пользователя по id
        const id = req.body.id;
        const details = {
            '_id': new ObjectID(id)
        };
        db.collection('users').findOne(details, (err, item) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {                   
                res.send(item);               
            }
        });
    });

    app.post('/users/delete', (req, res) => { //Удаление пользователя
        const id = req.body.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('users').remove(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {                    
                res.send('Users '+id+' deleted!');        
            }
        });
    });

    app.post('/users/update', (req, res) => { //Редактирование пользователя
        const id = req.body.id;
        const details = {
            '_id': new ObjectID(id)
        };
        const users = {
            surname: req.body.surname,
            name: req.body.name,
            patronymic: req.body.patronymic,
            telephone: req.body.telephone, 
            email: req.body.email,   
            password: req.body.password,    
        };
        db.collection('users').updateOne(details, { $set: users },(err, result) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send(users);
            }
        });
    });
    } 