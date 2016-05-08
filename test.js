//referenced logic from open source tumblr savior

var defaultLists = {
    'redList': ['policeman', 'brother', 'actress', 'mrs.'],
    'suggestList': ['police officer', 'sibling', 'actor', 'mx.']
};
//initialize defaultLists
//counter for each list
var inputCount = 0;
var getDone = 0;

initialCheck();

function initialCheck() {
    var userList = {};

    chrome.storage.local.get(null, function(resultIf){
    	getDone = 0;
    	if (resultIf == null){
    		userLists = defaultLists;
        	chrome.storage.local.set({'redList': userLists['redList']}) 
        	chrome.storage.local.set({'suggestList': userLists['suggestList']})
        	loadDictAndSettings(userLists);
        	walk(document.body);
    	}//if

    	else {
    		userLists = resultIf;
    		loadDictAndSettings(userLists);
    		walk(document.body);
    	}//else
    });
}//parseLists
asterisk = {}

function loadDictAndSettings(userLists){
	var rLength = userLists['redList'].length;
	var sLength = userLists['suggestList'].length;

	if (rLength != sLength){
		alert('Your stored settings are corrupt. Will reset back to the default settings.')
		userLists = defaultLists;
	}//if the lengths are not the same

	var rList = userLists['redList'];
	var sList = userLists['suggestList'];

	for (var i = 0; i < rLength; i++){
		asterisk[rList[i]] = sList[i]; 
	}//map each redList to sList

	for (aList in userLists){
		for (var j = 0; j < rLength; j++){		
			addInput(aList, userLists[aList][j]);
		}//add input from the boxes		
		//empty box
		addInput(aList);
		addButton = document.getElementById(aList + 'Add');
		addButton.addEventListener('click', function(e){
			addInput(e.target.parentNode.id);
		}, false);
	}//for 

	return asterisk;
}//loadSettings

function removeInput(removeid) {
	var optionInput = document.getElementById(removeid);
	if (!optionInput) {
		return;
	}
	optionInput.parentNode.removeChild(optionInput);
}

function addInput (someList, elemVal){
    var addList, addElem, addInput;

    if (elemVal === undefined){
	    elemVal = '';
    }//elemValue 

    length = inputCount++; 
    addList = document.getElementById(someList);
    addElem = document.getElementById(someList+'Add');
	
	addInput = document.createElement('input');
    addInput.value = elemVal;
    addInput.name = 'input'+someList;
    addInput.id = 'input'+someList+length;

    //code directly adapted from Tumblr Savior source code

    addOption = document.createElement('a');
	addOption.href = '#';
	addOption.addEventListener('click', function (e) {
		removeItem = e.target;
		while (removeItem.tagName !== 'DIV') {
			removeThis = removeItem.parentNode;
		}
		if (removeItem.id.indexOf('_div') >= 0) {
			removeItem(removeThis.id);
		}
	}, false);

	addOption.appendChild(document.createTextNode('\u00A0'));

	optionImage = document.createElement('img');
	optionImage.src = 'img/delete.png';
	addOption.appendChild(optionImage);

	addOption.appendChild(document.createTextNode('\u00A0'));

    linebreak = document.createElement('br');
    addDiv = document.createElement('div');
    addDiv.id = 'input'+someList+length+'_div';
    addDiv.appendChild(addOption);
    addDiv.appendChild(addInput);
    addDiv.appendChild(linebreak);
    addList.insertBefore(addDiv, addElem);
}//add Input

