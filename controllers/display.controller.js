const jobModel = require('../models/job.model');

module.exports.displayAll = async (req, res) => {
    const jobs = await jobModel.findAll({
        raw: true
    })

    try {
        res.render('jobs', {
            jobs: jobs
        });
    }
    catch (err) {
        console.log(err);
    }
}


module.exports.displayDetail = async (req, res) => {
    const job = await jobModel.findAll({
        raw: true,
        limit: 1,
        where: {
            id: req.params.id
        }
    })
    try {
        res.render('detail', {
            job: job
        });
    }
    catch (err) {
        console.log(err);
    }
}


module.exports.displayAdd = (req, res) => {
    res.render('add');
}