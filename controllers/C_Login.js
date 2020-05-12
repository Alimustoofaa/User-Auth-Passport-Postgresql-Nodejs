const passport = require('passport')

class C_Login{
    index(req, res){
        if(req.isAuthenticated()){
            res.render('index', {title: 'Index'})
        }else{
            res.redirect('/login')
        }
    }
    
    login(req, res){
        if(req.isAuthenticated()){
            res.redirect('/')
        }else{
            res.render('login', {
                title: 'Login',
                message: res.locals.message
            })
        }
    }

    logout(req, res){
        if(req.isAuthenticated()){
            console.log('User [' + req.user.username + '] has logged out.')
            req.logout()
            res.redirect('/');
        }else{
            res.redirect('/')
        }
    }
}

module.exports = new C_Login();