const jobModel = require('../models/job.model');
const sequelize = require('sequelize');
const Op = sequelize.Op;


module.exports.actionAdd = async (req, res) => {
    let errors = [];

    if (!req.body.title) {
        errors.push('Title is required!');
    }

    if (!req.body.technology) {
        errors.push('Technology is required!');
    }

    if (!req.body.description) {
        errors.push('Description is required!');
    }

    if (!req.body.email) {
        errors.push('Email is required!');
    }

    /////////////////
    if (errors.length) {
        res.render('add', {
            errors: errors,
            values: req.body
        });

    } else {

        if (!req.body.budget) {
            req.body.budget = 'Contact';
        } else {
            req.body.budget = '$' + req.body.budget;
        }
        // Remove space after comma
        req.body.technology = req.body.technology.toUpperCase().replace(/, /g, ', ')

        /////////////////
        const newJob = await jobModel.create({
            title: req.body.title,
            technology: req.body.technology,
            budget: req.body.budget,
            description: req.body.description,
            email: req.body.email

        })
        try {
            res.redirect('/jobs');
        }
        catch (err) {
            console.log(err);
        }
    }


}


module.exports.actionSearch = async (req, res) => {
    const jobs = await jobModel.findAll({
        where: {
            technology: {
                [Op.like]: '%' + req.query.q.toUpperCase() + '%'
            }
        }
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
