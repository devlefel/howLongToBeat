import { HowLongToBeatService, HowLongToBeatEntry } from "howlongtobeat";



let hltbService = new HowLongToBeatService();

hltbService.search('nioh').then(result => console.log(result));
