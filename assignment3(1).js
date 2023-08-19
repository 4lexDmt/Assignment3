function describeName(record) {
    return `Name: ${record.name}`;
}

function describeAge(record) {
    return `Age: ${record.age}`;
}

function describeEmail(record) {
    return `Email: ${record.email}`;
}

const jsonData = [
    {
        "name": "Maurice Babin",
        "age": 25,
        "email": "maurice@keyin.com"
    },
    {
        "name": "Peter Rawsthorne",
        "age": 30,
        "email": "peter.rawsthorne@keyin.com"
    },
    
];

jsonData.forEach(record => {
    console.log(describeName(record));
    console.log(describeAge(record));
    console.log(describeEmail(record));
    console.log('-----'); // Separator between records
});
