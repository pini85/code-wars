const request = require("request-promise");
const cheerio = require("cheerio");

const scrapCodeWars = async (name, callback) => {
  try {
    const options = {
      uri: `https://www.codewars.com/users/${name}/stats`,
      transform: function (body) {
        return cheerio.load(body);
      },
    };
    const $ = await request(options);
    return callback($, name);
  } catch (e) {
    console.log(e);
  }
};
module.exports = scrapCodeWars;
