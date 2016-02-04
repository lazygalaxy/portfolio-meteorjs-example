// configs
Blog.config({
    syntaxHighlighting: true,
    syntaxHighlightingTheme: 'github',
    adminBasePath: '/myBlogAdmin'
});

// templates
Template.registerHelper('getBrandName', function () {
    return "Giorgos Karagounis";
});

Template.registerHelper('getNowDate', function () {
    return new Date();
});
