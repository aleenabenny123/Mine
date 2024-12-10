'use strict';

const resumeButton = document.getElementById('resume');

const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'Python', 'git',
    'SQL', 'Flutter', 'Firebase',
];


let tagCloud;


function initializeTagCloud(radius) {
    if (tagCloud) {
        tagCloud.destroy(); 
    }

    tagCloud = TagCloud('.skills', myTags, {
        radius: radius,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        direction: 135,
        keep: true,
    });
}


let screenWidth = window.innerWidth;
initializeTagCloud(screenWidth < 578 ? 120 : 200);


window.addEventListener('resize', () => {
    screenWidth = window.innerWidth;

    if (screenWidth < 578) {
        resumeButton.innerText = 'Resume';
        initializeTagCloud(120);
    } else {
        resumeButton.innerText = 'Download My Resume';
        initializeTagCloud(200);
    }
});









