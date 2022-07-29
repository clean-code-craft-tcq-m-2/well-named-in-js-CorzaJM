import * as colorCodes from './colorCodes.js';
import * as colorPair from './colorPairs.js';
import * as colorCodeManual from './colorCodeManual.js';
	 
    function test(){
        let pairNumber = 4;
        let testPair1 = colorCodes.getColorFromPairNumber(pairNumber);
        console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
        console.assert(testPair1.majorColor == "WHITE");
        console.assert(testPair1.minorColor == "BROWN");        

        pairNumber = 5;
        testPair1 = colorCodes.getColorFromPairNumber(pairNumber);
        console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
        console.assert(testPair1.majorColor == "WHITE");
        console.assert(testPair1.minorColor == "SLATEGRAY");
            
        pairNumber = 23;
        testPair1 = colorCodes.getColorFromPairNumber(pairNumber);
        console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
        console.assert(testPair1.majorColor == "RED");
        console.assert(testPair1.minorColor == "GREEN");
            
        let testPair2 = new colorPair.ColorPair("YELLOW", "GREEN");
        pairNumber = colorCodes.getPairNumberFromColor(testPair2);
        console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
        console.assert(pairNumber==18);

        testPair2 = new colorPair.ColorPair("RED", "BLUE");
        pairNumber = colorCodes.getPairNumberFromColor(testPair2);
        console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
        console.assert(pairNumber==6);

        colorCodeManual.printReferenceManual();
}
test();
