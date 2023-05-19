import { HowLongToBeatService, HowLongToBeatEntry } from "howlongtobeat";

type Hours = {
  MinHours: number
  MaxHours: number
  Medium: number
}

type HLTBRunner = {
  Parser,
  Writter,
  Reader,
  Search: (name: string) => Hours,
}

let runner : HLTBRunner

let hltbService = new HowLongToBeatService();
const search = (name: string) => (Hours) => {

};
runner.Search = (name: string) => Hours {


hltbService.search('nioh').then(result => console.log(result));
};
