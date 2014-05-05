
//  
//  Mimic
//  Made by 1lann and GravityScore
//  



var config = {
	"width": 51,
	"height": 19,

	"cellWidth": 12,
	"cellHeight": 18,

	"borderWidth": 4,
	"borderHeight": 4,

	"maxStorageSize": 2 * 1024 * 1024, // 2 MB
};


var globals = {};


globals.characterWidths = [
	0, 2, 8, 10, 10, 10, 10, 4, 8, 8, 8, 10, 2, 10, 2, 10, 10, 10, 10, 
	10, 10, 10, 10, 10, 10, 10, 2, 2, 8, 10, 8, 10, 12, 10, 10, 10, 10, 
	10, 10, 10, 10, 6, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 
	10, 10, 10, 10, 10, 6, 10, 6, 10, 10, 4, 10, 10, 10, 10, 10, 8, 10, 
	10, 2, 10, 8, 4, 10, 10, 10, 10, 10, 10, 10, 6, 10, 10, 10, 10, 10, 
	10, 8, 2, 8, 12, 0
];


globals.buttons = {
	"click 0": 0,
	"click 2": 1,
	"click 1": 2,
	"scroll down": 3,
	"scroll up": 4,
	"drag 0": 5,
	"drag 2": 6,
	"drag 1": 7,
};


globals.colors = {
	// Black
	"0": "rgb(0, 0, 0)",

	// Red
	"1": "rgb(204, 76, 76)",

	// Green
	"2": "rgb(87, 166, 78)",

	// Brown
	"3": "rgb(127, 102, 76)",

	// Blue
	"4": "rgb(37, 49, 146)",

	// Purple
	"5": "rgb(178, 102, 229)",

	// Cyan
	"6": "rgb(76, 153, 178)",

	// Light gray
	"7": "rgb(153, 153, 153)",

	// Gray
	"8": "rgb(76, 76, 76)",

	// Pink
	"9": "rgb(242, 178, 204)",

	// Lime
	"a": "rgb(127, 204, 25)",

	// Yellow
	"b": "rgb(222, 222, 108)",

	// Light blue
	"c": "rgb(153, 178, 242)",

	// Magenta
	"d": "rgb(229, 127, 216)",

	// Orange
	"e": "rgb(242, 178, 51)",

	// White
	"f": "rgb(240, 240, 240)",
};


globals.characters = {
	"shift": {
		"65": "A",
		"66": "B",
		"67": "C",
		"68": "D",
		"69": "E",
		"70": "F",
		"71": "G",
		"72": "H",
		"73": "I",
		"74": "J",
		"75": "K",
		"76": "L",
		"77": "M",
		"78": "N",
		"79": "O",
		"80": "P",
		"81": "Q",
		"82": "R",
		"83": "S",
		"84": "T",
		"85": "U",
		"86": "V",
		"87": "W",
		"88": "X",
		"89": "Y",
		"90": "Z",
		"32": " ",
		"48": ")",
		"49": "!",
		"50": "@",
		"51": "#",
		"52": "$",
		"53": "%",
		"54": "^",
		"55": "&",
		"56": "*",
		"57": "(",
		"186": ":",
		"59":":",
		"187": "+",
		"61": "+",
		"188": "<",
		"189": "_",
		"173": "_",
		"190": ">",
		"191": "?",
		"192": "~",
		"219": "{",
		"220": "|",
		"221": "}",
		"222": "\"",
		"96": "0",
		"97": "1",
		"98": "2",
		"99": "3",
		"100": "4",
		"101": "5",
		"102": "6",
		"103": "7",
		"104": "8",
		"105": "9",
		"111": "/",
		"106": "*",
		"109": "-",
		"107": "+",
		"110": ".",
	}, "noshift": {
		"65": "a",
		"66": "b",
		"67": "c",
		"68": "d",
		"69": "e",
		"70": "f",
		"71": "g",
		"72": "h",
		"73": "i",
		"74": "j",
		"75": "k",
		"76": "l",
		"77": "m",
		"78": "n",
		"79": "o",
		"80": "p",
		"81": "q",
		"82": "r",
		"83": "s",
		"84": "t",
		"85": "u",
		"86": "v",
		"87": "w",
		"88": "x",
		"89": "y",
		"90": "z",
		"32": " ",
		"48": "0",
		"49": "1",
		"50": "2",
		"51": "3",
		"52": "4",
		"53": "5",
		"54": "6",
		"55": "7",
		"56": "8",
		"57": "9",
		"186": ";",
		"59":";",
		"187": "=",
		"61": "=",
		"188": ",",
		"189": "-",
		"173": "-",
		"190": ".",
		"191": "/",
		"192": "`",
		"219": "[",
		"220": "\\",
		"221": "]",
		"222": "'",
		"96": "0",
		"97": "1",
		"98": "2",
		"99": "3",
		"100": "4",
		"101": "5",
		"102": "6",
		"103": "7",
		"104": "8",
		"105": "9",
		"111": "/",
		"106": "*",
		"109": "-",
		"107": "+",
		"110": ".",
	},
};


globals.charCodes = {
		"a": "65",		"A": "65",
		"b": "66",		"B": "66",
		"c": "67",		"C": "67",
		"d": "68",		"D": "68",
		"e": "69",		"E": "69",
		"f": "70",		"F": "70",
		"g": "71",		"G": "71",
		"h": "72",		"H": "72",
		"i": "73",		"I": "73",
		"j": "74",		"J": "74",
		"k": "75",		"K": "75",
		"l": "76",		"L": "76",
		"m": "77",		"M": "77",
		"n": "78",		"N": "78",
		"o": "79",		"O": "79",
		"p": "80",		"P": "80",
		"q": "81",		"Q": "81",
		"r": "82",		"R": "82",
		"s": "83",		"S": "83",
		"t": "84",		"T": "84",
		"u": "85",		"U": "85",
		"v": "86",		"V": "86",
		"w": "87",		"W": "87",
		"x": "88",		"X": "88",
		"y": "89",		"Y": "89",
		"z": "90",		"Z": "90",
		" ": "32",		" ": "32",
		"0": "48",		")": "48",
		"1": "49",		"!": "49",
		"2": "50",		"@": "50",
		"3": "51",		"#": "51",
		"4": "52",		"$": "52",
		"5": "53",		"%": "53",
		"6": "54",		"^": "54",
		"7": "55",		"&": "55",
		"8": "56",		"*": "56",
		"9": "57",		"(": "57",
		";": "186",		":": "186",
		"=": "187",		"+": "187",
		//"=": "61",		"+": "61",
		",": "188",		"<": "188",
		"-": "189",		"_": "189",
		//"-": "173",		"_": "173",
		".": "190",		">": "190",
		"/": "191",		"?": "191",
		"`": "192",		"~": "192",
		"[": "219",		"{": "219",
		"\\": "220",	"|": "220",
		"]": "221",		"}": "221",
		"'": "222",		"\"": "222",
		"0": "96",		
		"1": "97",	
		"2": "98",	
		"3": "99",	
		"4": "100",
		"5": "101",
		"6": "102",
		"7": "103",
		"8": "104",
		"9": "105",
		"/": "111",
		"*": "106",
		"-": "109",
		"+": "107",
		".": "110",
}


globals.keyCodes = {
	// Key '
	"222": 40,

	// Key ,
	"188": 51,

	// Key -
	"189": 12,

	// Key .
	"190": 52,

	// Key /
	"191": 53,

	// Key 0
	//"48": 11,

        // test character
	"48": 55,

	// Key 1
	"49": 2,

	// Key 2
	"50": 3,

	// Key 3
	"51": 4,

	// Key 4
	"52": 5,

	// Key 5
	"53": 6,

	// Key 6
	"54": 7,

	// Key 7
	"55": 8,

	// Key 8
	"56": 9,

	// Key 9
	"57": 10,

	// Key ;
	"186": 39,

	// Key =
	"187": 13,

	// Key [
	"219": 26,

	// Key \
	"220": 43,

	// Key ]
	"221": 27,

	// Key `
	"192": 41,

	// Key a
	"65": 30,

	// Key alt
	"18": 56,

	// Key b
	"66": 48,

	// Key backspace
	"8": 14,

	// Key c
	"67": 46,

	// Key capslock
	"20": 58,

	// Key ctrl
	"17": 29,

	// Key d
	"68": 32,

	// Key delete
	"46": 211,

	// Key down
	"40": 208,

	// Key e
	"69": 18,

	// Key end
	"35": 207,

	// Key enter
	"13": 28,

	// Key escape
	"27": 1,

	// Key f
	"70": 33,

	// Key f1
	"112": 59,

	// Key f10
	"121": 68,

	// Key f11
	"122": 87,

	// Key f12
	"123": 88,

	// Key f2
	"113": 60,

	// Key f3
	"114": 61,

	// Key f4
	"115": 62,

	// Key f5
	"116": 63,

	// Key f6
	"117": 64,

	// Key f7
	"118": 65,

	// Key f8
	"119": 66,

	// Key f9
	"120": 67,

	// Key g
	"71": 34,

	// Key h
	"72": 35,

	// Key home
	"36": 199,

	// Key i
	"73": 23,

	// Key insert
	"45": 210,

	// Key j
	"74": 36,

	// Key k
	"75": 37,

	// Key l
	"76": 38,

	// Key left
	"37": 203,

	// Key lwin
	"91": 219,

	// Key m
	"77": 50,

	// Key n
	"78": 49,

	// Key numlock
	"12": 69,

	// Key numpad*
	"106": 55,

	// Key numpad+
	"107": 78,

	// Key numpad-
	"109": 74,

	// Key numpad.
	"110": 83,

	// Key numpad/
	"111": 181,

	// Key numpad0
	"96": 82,

	// Key numpad1
	"97": 79,

	// Key numpad2
	"98": 80,

	// Key numpad3
	"99": 81,

	// Key numpad4
	"100": 75,

	// Key numpad5
	"101": 76,

	// Key numpad6
	"102": 77,

	// Key numpad7
	"103": 71,

	// Key numpad8
	"104": 72,

	// Key numpad9
	"105": 73,

	// Key o
	"79": 24,

	// Key p
	"80": 25,

	// Key pagedown
	"34": 209,

	// Key pageup
	"33": 201,

	// Key q
	"81": 16,

	// Key r
	"82": 19,

	// Key right
	"39": 205,

	// Key rwin
	"92": 220,

	// Key s
	"83": 31,

	// Key shift
	"16": 42,

	// Key space
	"32": 57,

	// Key t
	"84": 20,

	// Key tab
	"9": 15,

	// Key u
	"85": 22,

	// Key up
	"38": 200,

	// Key v
	"86": 47,

	// Key w
	"87": 17,

	// Key x
	"88": 45,

	// Key y
	"89": 21,

	// Key z
	"90": 44,
};
