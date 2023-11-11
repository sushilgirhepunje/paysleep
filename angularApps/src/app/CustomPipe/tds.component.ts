import { Pipe,PipeTransform } from "@angular/core";
@Pipe({
    name:'tds'
})
export class TDS implements PipeTransform{
    

    transform(value: any, ...args: any[]) {
            let tds = value - (value * 0.10);

            if(args.find(x=>x == "pf")){
                tds = tds - (tds * 0.028);
                return tds
            }
            return tds;
    }
}