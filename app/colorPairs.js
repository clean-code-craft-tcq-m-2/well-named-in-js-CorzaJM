export const MajorColorNames = [
    "WHITE", "RED", "BLACK", "YELLOW", "VIOLET"
];
export const MinorColorNames = [
	"BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"
];

export class ColorPair{    

    constructor(major, minor){         
        this.majorColor = major;
        this.minorColor = minor;       
    }

    toString(){
        return `MajorColor:${this.majorColor},MinorColr:${this.minorColor}`;
    }
}