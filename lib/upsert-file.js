'use strict'

const fs = require('fs')
//const path = require('path')
const Q = require('q')

const readDir = Q.denodeify(fs.readdir)
const db = require('./../Database/database');
const readFile = Q.denodeify(fs.readFile)
const File = require('../Model/File');
const path = require('path');

const writeIntoDatabase = (data, entry) => {
    const file_name = entry
    const file_content = data

    return File.create({
        file_name,
        file_content
    })
        .then((file) => {
            console.log(`Record with id ${file.id} inserted successfully`)
        }
        )
        .catch((error) => {
            console.log(error)
        }
        );
}

const cli = (opts, args) => {
    return readDir(args.data)
        .then(entries => {
            const promiseList = entries.map(entry => {
                const filePath = path.resolve("./data", `./${entry}`)
                return readFile(filePath)
                    .then(data => {
                        return writeIntoDatabase(data.toString('utf-8'), entry)
                    })
            })
            return Q.all(promiseList)
        })
}

module.exports = {
    cli
}