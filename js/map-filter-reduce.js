"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeLanguages = users.filter(n => n.languages.length >= 3);
console.log(threeLanguages);

function userExperience (){
    const totalExperience = users.reduce((years, person) => {
        return years + person.yearsOfExperience;
    }, 0 );
    console.log(totalExperience);
    const averageExperience = totalExperience/users.length;
    console.log(`With ${totalExperience} total years of experience across all users, the average user experience is approximately ${averageExperience} hours per user.`);
}

function userEmails () {
    const emailArray = users.map(n=>n.email);
    const longestEmail = emailArray.reduce(function(currentLength, item) {
        if (item.length>currentLength.length) {
            return item;
        } else {
            return currentLength;
        }
    }, '');
    console.log(longestEmail);
}
userExperience();
userEmails();


/*
Use reduce to get the longest email from the list of users.
Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
Bonus
Use reduce to get the unique list of languages from the list of users.
*/