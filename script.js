var asterisk = {
    'policeman': 'police officer',
    'mrs.': 'mx.',
    'brother': 'sibling',
    'she' : 'Is this the right pronoun?',
    'stewardess': 'flight attendant',
    'guys': 'you all',
    'the disabled': 'user person first language',
    'bitch': 'this is a gendered slur',
    'niece': 'nibling',
    'boyfriend': 'partner',
    'wife': 'spouse'
};

for (key in asterisk){
	var replacement = '<span title = \"' + asterisk[key] + '\"><font color = "red">' + key +'</font></span>';
	var re = new RegExp(key, 'ig');
	document.body.innerHTML = document.body.innerHTML.replace(re, replacement);
}
//var replacement = '<>'+tempT+'</font>';
//var toreg = '\\b' + tempT + "\\g" 
//var re = new RegExp(tempT, 'ig');
//document.body.innerHTML = document.body.innerHTML.replace(re, replacement);//
