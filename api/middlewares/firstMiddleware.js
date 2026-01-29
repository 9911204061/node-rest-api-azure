function firstMiddleware(req, res, next) { 
    console.log('First middleware executed4');
    next();
}

module.exports = firstMiddleware;