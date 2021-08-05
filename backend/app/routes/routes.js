const {ObjectID} = require("mongodb");

// Новости
module.exports = function (app, db) {
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
}