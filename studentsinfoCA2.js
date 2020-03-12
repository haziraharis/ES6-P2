class Students {
    constructor (name, matricno, major) {
        this.name = name;
        this.matricno = matricno;
        this.major = major;
    }

   get Name () {
        //return `Name: ${this.name}`;
        return this.name;
    }

    set Name (name) {
        this.name = name;
    }

    get MatricNo () {
        //return `Matric No: ${this.matricno}`;
        return this.matricno;
    }

    set MatricNo (matricno) {
        this.matricno = matricno;
    }

    get Major () {
        //return `Major: ${this.major}`;
        return this.major;
    }

    set Major (major) {
        this.major = major;
    }

}

module.exports = Students;
