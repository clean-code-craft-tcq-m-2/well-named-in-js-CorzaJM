import * as colorPairs from './colorPairs.js';
import * as colorCodes from './colorCodes.js';

export function printReferenceManual(){
    let referenceManual = ` 
    | MajorColor | MinorColor | CodePair |
    --------------------------------------`;
    let totalColorCodes = colorPairs.MajorColorNames.length * colorPairs.MinorColorNames.length;

    for(let x = 0; x < totalColorCodes; x++){
        let pair = colorCodes.getColorFromPairNumber(x + 1);        
        let row = "    |  ";
        row += pair.majorColor;
        for(let s = 0; s < (10 - pair.majorColor.length); s++) row += " ";
        row += "| ";
        row += pair.minorColor;
        for(let s = 0; s < (11 - pair.minorColor.length); s++) row += " ";
        row += "| ";
        row += `${x + 1}`;
        if((x + 1) < 10)
            row += "        |";
        else 
            row += "       |";
        referenceManual += "\n" + row   
    }
    return referenceManual;
}