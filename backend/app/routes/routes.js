// module.exports = function (app, db) {
//     app.post('/feedback', (req, res) => {
//             const note = {
//                 text: req.body.text,
//                 title: req.body.title,
//                 date: req.body.date,
//                 rate: req.body.rate,
//             };
//             db.collection('notes').insertOne(note, (err, result) => {
//                 console.log('NOTE', note)
//                 if (err) {
//                     console.log('ERROR',err)
//                     res.send({
//                         'error': 'An error has occurred'
//                     });
//                 } else {
//                     res.send(result.ops[0]);
//                 }
//             });
//     });
// }
