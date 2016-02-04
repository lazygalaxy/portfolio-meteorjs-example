Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
    this.render('home');
});

Router.route('/photos', function () {
    this.render('photos');
});

Router.route('/contact', function () {
    this.render('contact');
});
