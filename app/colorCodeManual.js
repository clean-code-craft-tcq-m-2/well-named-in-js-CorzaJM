import * as colorPairs from './colorPairs.js';
import * as colorCodes from './colorCodes.js';

export function printReferenceManual(){
    let header = ` 
    | MajorColor | MinorColor | CodePair |
    --------------------------------------`;
    let totalColorCodes = colorPairs.MajorColorNames.length * colorPairs.MinorColorNames.length;

    console.log(header);
    for(let x = 0; x < totalColorCodes; x++){
        let pair = colorCodes.getColorFromPairNumber(x + 1);        
        let row = "      ";
        row += pair.majorColor;
        for(let s = 0; s < (11 - pair.majorColor.length); s++) row += " ";
        row += "| ";
        row += pair.minorColor;
        for(let s = 0; s < (11 - pair.minorColor.length); s++) row += " ";
        row += "| ";
        row += `${x + 1}`;
        if((x + 1) < 10)
            row += "        |"
        else 
            row += "       |"      
        console.log(row);
    }
}