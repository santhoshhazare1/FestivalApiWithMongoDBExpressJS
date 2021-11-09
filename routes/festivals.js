const express = require('express');
const router = express.Router();
const Festival = require('../modals/festival');

router.post('/', (req, res) => {
    const festival = new Festival({
        festivalName: req.body.festivalName,
        region: req.body.region,
        religion: req.body.religion,
        state: req.body.state,
        description: req.body.description
    })
    festival.save().then(data => {
        res.json(data);
    }).catch(err => {
        res.json({ message: err });
    })
})

router.get('/', async (req, res) => {
    try {
        const festivals = await Festival.find();
        res.json(festivals);
      
    } catch (err) {
        res.json({
            message: err
        });
    }
});


router.get('/:festivalid', async (req, res) => {
    try {
        const festival = await Festival.findById(req.params.festivalid);
        res.json(festival);
     
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:festivalid', async (req, res) => {
    try {
        const removefestival = await Festival.deleteOne({ _id: req.params.festivalid });
        res.json(removefestival);
    } catch (err) {
        res.json({ message: err });
    }
});

router.patch('/:festivalid', async(req,res)=>{
try{
    const festival= await Festival.findByIdAndUpdate({_id:req.params.festivalid});
    if(req.body.festivalName){
        festival.festivalName= req.body.festivalName;
    }
    if(req.body.region){
        festival.region= req.body.region;
    }
    if(req.body.religion){
        festival.religion= req.body.religion;
    }
    if(req.body.state){
        festival.state= req.body.state;
    }
    if(req.body.description){
        festival.description= req.body.description;
    }
    await festival.save();
    console.log('patch method',festival);
    res.json(festival);
}
catch(err){
res.json({message:err});
}});

module.exports = router;
