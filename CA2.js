let students = require ('./studentsinfoCA2.js')
const readline = require ('readline');

const rl = readline.createInterface ({
    input: process.stdin,

    output: process.stdout
});

rl.question('What is your name? ', (name) => {
    rl.question('What is your matric no? ', (matricno) => {
        rl.question ('What is your major in KICT? ', (major) => {
            rl.close();

           
            let student = new students(name,matricno,major);
            console.log(`Your name is: ${student.name}`);
            console.log(`Your matric no is: ${student.matricno}`);
            console.log(`You are a ${student.major}`, `student`);
            

            
        })
    })
})
