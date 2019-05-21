var ObjectID = require('mongodb').ObjectID;


function error(err) {
    return {'error': 'An error occured: ' + err}
}

module.exports = function(app, db){

    app.put('/docs/:id', (req, res) => {
        
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        const doc = {};
        if(req.body.name){
            doc.name = req.body.name
        }
        if(req.body.words_per_day){
            doc.words_per_day = req.body.words_per_day;
            doc.advance_freq = Math.floor(1 / ((req.body.words_per_day / 86400) * 5));    
        }
        if(req.body.content){
            doc.content = req.body.content;
        }
        db.collection('docs').update(details, doc, (err, result) => {
            if (err){
                res.send(error(err))
            } else{
                res.send(doc);
            }
        });
    });

    app.delete('/docs/:id', (req,res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('docs').remove(details, (err,item)=> {
            if(err){
                res.send(error(err))
            }else{
                res.send('Doc ' + id + ' deleted!');
            }
        });
    });
    
    app.get("/docs", (req, res) => {
        db.collection('docs').find({}).toArray((err, item) => {
            if(err){
                res.send(error(err));
            }else{
                res.send(item);
            }
        });
    });

    app.get('/docs/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)}
        db.collection('docs').findOne(details, (err, item)=> {
            if(err){
                res.send(error(err));
            }else{
                res.send({current_time: Math.floor(new Date() / 1000), ...item});
            }
        });
    });
    
   app.post("/docs", (req, res) => {
     const doc = {
         name: req.body.name, 
         words_per_day: req.body.words_per_day,
         advance_freq: Math.floor(1 / ((req.body.words_per_day / 86400) * 5)), 
         created_at: Math.floor(new Date() / 1000),
     };
     db.collection('docs').insert(doc, (err, result) => {
        if (err){
            res.send(error(err));
        }else{
            res.send(result.ops[0]);
        }
     });
 });    
};
