$(document).ready(function() {
    // timesheet.js
    var now = moment().format('MM/YYYY');
    new Timesheet('timesheet', 2011, 2016, [
        ['03/2011', '03/2014', 'Computer Science B.S.', 'ipsum'],
        ['06/2013', '08/2013', 'Web Development Intern, Pacific Amusement Inc.', 'default'],
        ['09/2013', '03/2014', 'iOS Development Intern, KidzPlan', 'default'],
        ['09/2013', '03/2014', 'Professor Asstistant, Kristin Tufte', 'default'],
        ['05/2014', now, 'Front-end Developer, Supportland', 'lorem'],
        ['05/2016', now, 'Full Stack Developer, WelVU', 'dolor']
    ]);

    // typed.js
    $("#typed-strings").typed({
        strings: ['<span class="hero-title">Neil Gebhard</span>'],
        contentType: 'html',
        typeSpeed: 25
    });

    // aos.js
    AOS.init();

    // grid.js
    setTimeout(function() {
        var grid = new Minigrid({
            container: '.cards',
            item: '.card',
            gutter: 6
        });
        grid.mount();
    }, 100)
});
