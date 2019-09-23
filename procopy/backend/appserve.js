var express =require ('express');
var cors =require ('cors');
var bodyParser =require ('body-parser');
var mongoose =require ('mongoose');

var Rate =require('./models/Rate');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());



mongoose.connect('mongodb://localhost:27017/rate');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/Rate').get((req, res) => {
    Rate.find((err, rate) => {
        if (err)
            console.log(err);
        else
            res.json(rate);
    });
});

router.route('/Issues/:id').get((req, res) => {
    Rate.findById(req.params.id, (err, rate) => {
        if (err)
            console.log(err);
        else
            res.json(rate);
    });
});

router.route('/Rate/add').post((req, res) => {
    let Rate = new Rate(req.body);
    rate.save()
        .then(rate => {
            res.status(200).json({'rate': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/Rate/update/:id').post((req, res) => {
    Rate.findById(req.params.id, (err, rate) => {
        if (!rate)
            return next(new Error('Could not load document'));
        else {
            rate.title = req.body.title;
            rate.description = req.body.description;
            rate.rating=req.body.rating;
            

            rate.save().then(rate => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/Rate/delete/:id').get((req, res) => {
    Rate.findByIdAndRemove({_id: req.params.id}, (err, rate) => {
        if (err)
            res.json(err);
            
        else
            res.json('Remove successfully');
    })
})

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));