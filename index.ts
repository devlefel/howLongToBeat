import { HowLongToBeatService, HowLongToBeatEntry } from "howlongtobeat";
import { GameHour } from "./models/Classes";
import * as fs from "fs";
import { parse } from "csv/sync";

class service {
    private howLongToBeatService: HowLongToBeatService;
    constructor(howLongToBeatService: HowLongToBeatService) {
        this.howLongToBeatService = howLongToBeatService;
    }

    async read(path: string) {
        const fileContent = await fs.promises.readFile(path, "utf8");
        const records = parse(fileContent, { columns: true });
        for (const record of records) {
            await this.search(record.Name);
        }
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


hltbs.read('./read_fs.csv')
    .then(result => console.log('feito!'))
    .catch(err => console.log(`err ${err}`));
