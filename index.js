"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var howlongtobeat_1 = require("howlongtobeat");
var hltbService = new howlongtobeat_1.HowLongToBeatService();
hltbService.search('Nioh').then(function (result) { return console.log(result); });
