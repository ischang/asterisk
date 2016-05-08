walk(document.body)

function walk(node) 
{
	// I stole this function from the cloud to butt extensions
	//who stole it from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}


function handleText(textNode) {
	var v = textNode.nodeValue;
	var tempT = 'the';
	//for (item in v) {
		//var temp = item;
		//temp = temp.toLowerCase();
		
		//if (asterisk[temp]){

		//}

	var replacement = '<b> ' + tempT + '</b>';
	var toreg = "/\\b" + tempT + "\\b/g";
	//console.log(toreg);
	//var re = new RegExp(tempT, 'ig');
	v = v.replace(toreg, replacement);
	//}
	textNode.nodeValue = v;
}

//var tempT = 'the';
//var replacement = '<span style=\"background-color: #FFFF00\">'+tempT+'</span>';
//console.log(replacement);
//var re = new RegExp(tempT, 'ig');
//console.log(re);
//console.log("YESYSYS");
//document.body.innerHTML = document.body.innerHTML.replace(re, replacement);

