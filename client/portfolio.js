// configs
Blog.config({
    syntaxHighlighting: true,
    syntaxHighlightingTheme: 'github',
    adminBasePath: '/myBlogAdmin',
    adminRole: 'blogAdmin',
    authorRole: 'blogAuthor'
});

// templates
Template.registerHelper('getBrandName', function () {
    return "Giorgos Karagounis";
});

Template.registerHelper('getNowDate', function () {
    return new Date();
});
