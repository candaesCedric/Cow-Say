const { comCamp } = require("./information");
const cowsay = require("cowsay");
const moi = `Salut je suis ${comCamp.nom} du campus de ${comCamp.campus}`;
console.log(cowsay.say({
    text : moi
}));