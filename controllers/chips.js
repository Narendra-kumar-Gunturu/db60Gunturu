var chips = require('../models/chips')
// List of all chips
exports.chips_list = async function (req, res) {
    // List of all chips
    res.send('NOT IMPLEMENTED: chips list');
};
exports.chips_list = async function (req, res) {
    try {
        thechips = await chips.find();
        res.send(thechips);
    }
    catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// for a specific Handbag.
exports.chips_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await chips.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Handbag create on POST.
exports.chips_create_post = async function (req, res) {
    console.log(req.body)
    let document = new chips();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Dimensions":"Stylish", "Color":"Violet", "Price":1500}
    document.chipsName = req.body.chipsName;
    document.Flavour = req.body.Flavour;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// Handle chips delete form on DELETE.
exports.chips_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Handbag delete DELETE ' + req.params.id);
};
// Handle chips update form on PUT.
exports.chips_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await chips.findById(req.params.id)
        // Do updates of properties
        if (req.body.chipsName) toUpdate.chipsName = req.body.chipsName;
        if (req.body.Flavour) toUpdate.Flavour = req.body.Flavour;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};
// VIEWS
// Handle a show all view
exports.chips_view_all_Page = async function (req, res) {
    try {
        thechips = await chips.find();
        res.render('chips', { title: 'Handbag Search Results', results: thechips });
    }
    catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};

// Handle chips delete on DELETE.
exports.chips_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await chips.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.chips_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await chips.findById(req.query.id)
        res.render('chipsdetail',
            { title: 'chips Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a chips.
// No body, no in path parameter, no query.
// Does not need to be async
exports.chips_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('chipscreate', { title: 'chips Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a chips.
// query provides the id
exports.chips_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await chips.findById(req.query.id)
        res.render('chipsupdate', { title: 'chips Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.chips_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await chips.findById(req.query.id)
        res.render('chipsdelete', { title: 'chips Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};



