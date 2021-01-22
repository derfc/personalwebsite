const alphabet = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"x",
	"y",
	"z",
];

export const isPangram = (str) => {
	for (let i in str) {
		if (alphabet[alphabet.indexOf(str[i].toLowerCase())]) {
			alphabet.splice(alphabet.indexOf(str[i].toLowerCase()), 1);
		}
	}
	return alphabet.length < 1;
};
