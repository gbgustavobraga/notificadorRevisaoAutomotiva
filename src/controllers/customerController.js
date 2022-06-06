const Customer = require('../models/CustomerModel')

exports.index = async(req, res) => {
    res.render('customer');
};


exports.register = async function(req, res) {
    const customer = new Customer(req.body);
    await customer.sendEmail();

    if(customer.errors.length > 0 ) {
        req.flash('errors', login.errors);
        req.session.save(function () {
            return res.redirect('back');
        })
        return;
    }
    return res.redirect('back');
}

