const fs = require('fs');
const colors = require('colors');

const createFileTable = async (base = 0, to = 10, list = false) => {
    try {
        let exit = '';
        for (let i = 1; i <= to; i++) {
            exit += `${base} * ${i} = ${base * i}\n`;
        }

        if (list) {
            console.log(exit.cyan);
        }

        fs.writeFileSync(`./exit/tabla-${base}.txt`, exit);
        return `tabla-${base}.txt creado`.rainbow;
    } catch (err) {
        throw err
    }
}

module.exports = {
    createFileTable
}