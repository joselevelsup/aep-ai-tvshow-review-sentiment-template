// The OpenAI node module to be used with the zod helper which will help us parse the response from AI
const OpenAI = require("openai");
const {zodResponseFormat} = require("openai/helpers/zod");
const z = require("zod");

const ai = new OpenAI()

//This is the utility that will send messages to AI and get some type of response back
async function analyzeSentiment(tvShow, review){
}

module.exports = {
  analyzeSentiment
}
