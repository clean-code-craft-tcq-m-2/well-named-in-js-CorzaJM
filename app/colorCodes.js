import * as colorPairs from './colorPairs.js';

export function getColorFromPairNumber(pairNumber){
	let minorSize = colorPairs.MajorColorNames.length;
	let majorSize = colorPairs.MinorColorNames.length;
	
	if (pairNumber < 1 || pairNumber > minorSize * majorSize){
 	    throw `Argument PairNumber:${pairNumber} is outside the allowed range` 
	}
	let zeroBasedPairNumber = pairNumber - 1;
    let majorIndex = parseInt (zeroBasedPairNumber / minorSize);
    let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
	let  pair = new colorPairs.ColorPair(colorPairs.MajorColorNames[majorIndex], colorPairs.MinorColorNames[minorIndex]);
	return pair;
}

export function getPairNumberFromColor(pair){
    let majorIndex = -1;
    for (let i = 0; i < colorPairs.MajorColorNames.length; i++)
        {
            if (colorPairs.MajorColorNames[i] == pair.majorColor)
            {
                majorIndex = i;
                break;
            }
        }

    let minorIndex = -1;
        for (let i = 0; i < colorPairs.MinorColorNames.length; i++)
        {
            if (colorPairs.MinorColorNames[i] == pair.minorColor)
            {
                minorIndex = i;
                break;
            }
        }

    if (majorIndex == -1 || minorIndex == -1)
        {
            throw `Unknown Colors:${pair.toString()}`;
        }

    return (majorIndex * colorPairs.MinorColorNames.length) + (minorIndex + 1);
}

export function printReferenceManual(){
    let header = ` 
    | MajorColor | MinorColor | CodePair |
    --------------------------------------`;
    let totalColorCodes = colorPairs.MajorColorNames.length * colorPairs.MinorColorNames.length;

    console.log(header);
    for(let x = 0; x < totalColorCodes; x++){
        let pair = getColorFromPairNumber(x + 1);        
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