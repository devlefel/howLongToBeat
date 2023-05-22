import { HowLongToBeatService, HowLongToBeatEntry } from "howlongtobeat";
import { GameHour } from "./models/Classes";

class service {
    private howLongToBeatService: HowLongToBeatService;
    constructor(howLongToBeatService: HowLongToBeatService) {
        this.howLongToBeatService = howLongToBeatService;
    }

    async search(name: string): Promise<GameHour> {
        const results = await this.howLongToBeatService.search(name) as HowLongToBeatEntry[];
        const result = results.shift() as HowLongToBeatEntry;
        const hour = new GameHour(name, result.gameplayMain, result.gameplayMainExtra);
        console.log(hour);
        return hour;
    };
}

const hltbs = new service(new HowLongToBeatService)


hltbs.search('nioh')
    .then(result => console.log('feito!'))
    .catch(err => console.log(`err ${err}`));
