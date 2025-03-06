const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logger = async (massge, logName) => {
    const date = `${format(new Date(), 'yyyy-MM-dd]]\t[HH:mm:ss')}`;
    const logItem = `${date} - ${massge}\n`;
    try{
        if (!fs.existsSync(path.join(__dirname, '../logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '../logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, `../logs/${logName}.log`), logItem);
    } catch (err) {
        console.log(err);
    }
}

module.exports = logger;