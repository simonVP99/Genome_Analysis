// (C) Wolfgang Huber 2010-2011

// Script parameters - these are set up by R in the function 'writeReport' when copying the 
//   template for this script from arrayQualityMetrics/inst/scripts into the report.

var highlightInitial = [ false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, true, true ];
var arrayMetadata    = [ [ "1", "GSM4116294", "Patient #01, d0, technical replicate 1", "individual: Patient #01", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #01", "day 0", "control" ], [ "2", "GSM4116295", "Patient #01, d0, technical replicate 2", "individual: Patient #01", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #01", "day 0", "control" ], [ "3", "GSM4116296", "Patient #01, d0, technical replicate 3", "individual: Patient #01", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #01", "day 0", "control" ], [ "4", "GSM4116297", "Patient #01, d8, technical replicate 1", "individual: Patient #01", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #01", "day 8", "decitabine (DAC)" ], [ "5", "GSM4116298", "Patient #01, d8, technical replicate 2", "individual: Patient #01", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #01", "day 8", "decitabine (DAC)" ], [ "6", "GSM4116299", "Patient #01, d8, technical replicate 3", "individual: Patient #01", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #01", "day 8", "decitabine (DAC)" ], [ "7", "GSM4116300", "Patient #02, d0, technical replicate 1", "individual: Patient #02", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #02", "day 0", "control" ], [ "8", "GSM4116301", "Patient #02, d0, technical replicate 2", "individual: Patient #02", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #02", "day 0", "control" ], [ "9", "GSM4116302", "Patient #02, d0, technical replicate 3", "individual: Patient #02", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #02", "day 0", "control" ], [ "10", "GSM4116303", "Patient #02, d8, technical replicate 1", "individual: Patient #02", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #02", "day 8", "decitabine (DAC)" ], [ "11", "GSM4116304", "Patient #02, d8, technical replicate 2", "individual: Patient #02", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #02", "day 8", "decitabine (DAC)" ], [ "12", "GSM4116305", "Patient #03, d0, technical replicate 1", "individual: Patient #03", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #03", "day 0", "control" ], [ "13", "GSM4116306", "Patient #03, d0, technical replicate 2", "individual: Patient #03", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #03", "day 0", "control" ], [ "14", "GSM4116307", "Patient #03, d0, technical replicate 3", "individual: Patient #03", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #03", "day 0", "control" ], [ "15", "GSM4116308", "Patient #03, d8, technical replicate 1", "individual: Patient #03", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #03", "day 8", "decitabine (DAC)" ], [ "16", "GSM4116309", "Patient #03, d8, technical replicate 2", "individual: Patient #03", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #03", "day 8", "decitabine (DAC)" ], [ "17", "GSM4116310", "Patient #03, d8, technical replicate 3", "individual: Patient #03", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #03", "day 8", "decitabine (DAC)" ], [ "18", "GSM4116311", "Patient #04, d0, technical replicate 1", "individual: Patient #04", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #04", "day 0", "control" ], [ "19", "GSM4116312", "Patient #04, d0, technical replicate 2", "individual: Patient #04", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #04", "day 0", "control" ], [ "20", "GSM4116313", "Patient #04, d8, technical replicate 1", "individual: Patient #04", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #04", "day 8", "decitabine (DAC)" ], [ "21", "GSM4116314", "Patient #04, d8, technical replicate 2", "individual: Patient #04", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #04", "day 8", "decitabine (DAC)" ], [ "22", "GSM4116315", "Patient #04, d8, technical replicate 3", "individual: Patient #04", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #04", "day 8", "decitabine (DAC)" ], [ "23", "GSM4116316", "Patient #05, d0, technical replicate 1", "individual: Patient #05", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #05", "day 0", "control" ], [ "24", "GSM4116317", "Patient #05, d0, technical replicate 2", "individual: Patient #05", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #05", "day 0", "control" ], [ "25", "GSM4116318", "Patient #05, d0, technical replicate 3", "individual: Patient #05", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #05", "day 0", "control" ], [ "26", "GSM4116319", "Patient #05, d8, technical replicate 1", "individual: Patient #05", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #05", "day 8", "decitabine (DAC)" ], [ "27", "GSM4116320", "Patient #05, d8, technical replicate 2", "individual: Patient #05", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #05", "day 8", "decitabine (DAC)" ], [ "28", "GSM4116321", "Patient #05, d8, technical replicate 3", "individual: Patient #05", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #05", "day 8", "decitabine (DAC)" ], [ "29", "GSM4116322", "Patient #06, d0, technical replicate 1", "individual: Patient #06", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #06", "day 0", "control" ], [ "30", "GSM4116323", "Patient #06, d0, technical replicate 2", "individual: Patient #06", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #06", "day 0", "control" ], [ "31", "GSM4116324", "Patient #06, d0, technical replicate 3", "individual: Patient #06", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #06", "day 0", "control" ], [ "32", "GSM4116325", "Patient #06, d8, technical replicate 1", "individual: Patient #06", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #06", "day 8", "decitabine (DAC)" ], [ "33", "GSM4116326", "Patient #06, d8, technical replicate 2", "individual: Patient #06", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #06", "day 8", "decitabine (DAC)" ], [ "34", "GSM4116327", "Patient #06, d8, technical replicate 3", "individual: Patient #06", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #06", "day 8", "decitabine (DAC)" ], [ "35", "GSM4116328", "Patient #07, d0, technical replicate 1", "individual: Patient #07", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #07", "day 0", "control" ], [ "36", "GSM4116329", "Patient #07, d0, technical replicate 2", "individual: Patient #07", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #07", "day 0", "control" ], [ "37", "GSM4116330", "Patient #07, d0, technical replicate 3", "individual: Patient #07", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #07", "day 0", "control" ], [ "38", "GSM4116331", "Patient #07, d8, technical replicate 1", "individual: Patient #07", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #07", "day 8", "decitabine (DAC)" ], [ "39", "GSM4116332", "Patient #07, d8, technical replicate 2", "individual: Patient #07", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #07", "day 8", "decitabine (DAC)" ], [ "40", "GSM4116333", "Patient #07, d8, technical replicate 3", "individual: Patient #07", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #07", "day 8", "decitabine (DAC)" ], [ "41", "GSM4116334", "Patient #11, d0, technical replicate 1", "individual: Patient #11", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #11", "day 0", "control" ], [ "42", "GSM4116335", "Patient #11, d0, technical replicate 2", "individual: Patient #11", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #11", "day 0", "control" ], [ "43", "GSM4116336", "Patient #11, d0, technical replicate 3", "individual: Patient #11", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #11", "day 0", "control" ], [ "44", "GSM4116337", "Patient #11, d8, technical replicate 1", "individual: Patient #11", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #11", "day 8", "decitabine (DAC)" ], [ "45", "GSM4116338", "Patient #11, d8, technical replicate 2", "individual: Patient #11", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #11", "day 8", "decitabine (DAC)" ], [ "46", "GSM4116339", "Patient #11, d8, technical replicate 3", "individual: Patient #11", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #11", "day 8", "decitabine (DAC)" ], [ "47", "GSM4116340", "Patient #12, d0, technical replicate 1", "individual: Patient #12", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #12", "day 0", "control" ], [ "48", "GSM4116341", "Patient #12, d0, technical replicate 2", "individual: Patient #12", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #12", "day 0", "control" ], [ "49", "GSM4116342", "Patient #12, d0, technical replicate 3", "individual: Patient #12", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #12", "day 0", "control" ], [ "50", "GSM4116343", "Patient #12, d8, technical replicate 1", "individual: Patient #12", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #12", "day 8", "decitabine (DAC)" ], [ "51", "GSM4116344", "Patient #12, d8, technical replicate 2", "individual: Patient #12", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #12", "day 8", "decitabine (DAC)" ], [ "52", "GSM4116345", "Patient #12, d8, technical replicate 3", "individual: Patient #12", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #12", "day 8", "decitabine (DAC)" ], [ "53", "GSM4116346", "Patient #13, d0, technical replicate 1", "individual: Patient #13", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #13", "day 0", "control" ], [ "54", "GSM4116347", "Patient #13, d0, technical replicate 2", "individual: Patient #13", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #13", "day 0", "control" ], [ "55", "GSM4116348", "Patient #13, d0, technical replicate 3", "individual: Patient #13", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #13", "day 0", "control" ], [ "56", "GSM4116349", "Patient #13, d8, technical replicate 1", "individual: Patient #13", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #13", "day 8", "decitabine (DAC)" ], [ "57", "GSM4116350", "Patient #13, d8, technical replicate 2", "individual: Patient #13", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #13", "day 8", "decitabine (DAC)" ], [ "58", "GSM4116351", "Patient #13, d8, technical replicate 3", "individual: Patient #13", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #13", "day 8", "decitabine (DAC)" ], [ "59", "GSM4116352", "Patient #14, d0, technical replicate 1", "individual: Patient #14", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #14", "day 0", "control" ], [ "60", "GSM4116353", "Patient #14, d0, technical replicate 2", "individual: Patient #14", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #14", "day 0", "control" ], [ "61", "GSM4116354", "Patient #14, d0, technical replicate 3", "individual: Patient #14", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #14", "day 0", "control" ], [ "62", "GSM4116355", "Patient #14, d8, technical replicate 1", "individual: Patient #14", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #14", "day 8", "decitabine (DAC)" ], [ "63", "GSM4116356", "Patient #14, d8, technical replicate 2", "individual: Patient #14", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #14", "day 8", "decitabine (DAC)" ], [ "64", "GSM4116357", "Patient #14, d8, technical replicate 3", "individual: Patient #14", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #14", "day 8", "decitabine (DAC)" ], [ "65", "GSM4116358", "Patient #15, d0, technical replicate 1", "individual: Patient #15", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #15", "day 0", "control" ], [ "66", "GSM4116359", "Patient #15, d0, technical replicate 2", "individual: Patient #15", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #15", "day 0", "control" ], [ "67", "GSM4116360", "Patient #15, d0, technical replicate 3", "individual: Patient #15", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #15", "day 0", "control" ], [ "68", "GSM4116361", "Patient #15, d8, technical replicate 1", "individual: Patient #15", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #15", "day 8", "decitabine (DAC)" ], [ "69", "GSM4116362", "Patient #15, d8, technical replicate 2", "individual: Patient #15", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #15", "day 8", "decitabine (DAC)" ], [ "70", "GSM4116363", "Patient #15, d8, technical replicate 3", "individual: Patient #15", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #15", "day 8", "decitabine (DAC)" ], [ "71", "GSM4116364", "Patient #16, d0, technical replicate 1", "individual: Patient #16", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #16", "day 0", "control" ], [ "72", "GSM4116365", "Patient #16, d0, technical replicate 2", "individual: Patient #16", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #16", "day 0", "control" ], [ "73", "GSM4116366", "Patient #16, d0, technical replicate 3", "individual: Patient #16", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #16", "day 0", "control" ], [ "74", "GSM4116367", "Patient #16, d8, technical replicate 1", "individual: Patient #16", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #16", "day 8", "decitabine (DAC)" ], [ "75", "GSM4116368", "Patient #16, d8, technical replicate 2", "individual: Patient #16", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #16", "day 8", "decitabine (DAC)" ], [ "76", "GSM4116369", "Patient #16, d8, technical replicate 3", "individual: Patient #16", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #16", "day 8", "decitabine (DAC)" ], [ "77", "GSM4116370", "Patient #17, d0, technical replicate 1", "individual: Patient #17", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #17", "day 0", "control" ], [ "78", "GSM4116371", "Patient #17, d0, technical replicate 2", "individual: Patient #17", "treatment: control", "time: day 0", "gene expression data from AML patients at day 0 of DAC treatment", "Patient #17", "day 0", "control" ], [ "79", "GSM4116372", "Patient #17, d8, technical replicate 1", "individual: Patient #17", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #17", "day 8", "decitabine (DAC)" ], [ "80", "GSM4116373", "Patient #17, d8, technical replicate 2", "individual: Patient #17", "treatment: decitabine (DAC)", "time: day 8", "gene expression data from AML patients at day 8 of DAC treatment", "Patient #17", "day 8", "decitabine (DAC)" ] ];
var svgObjectNames   = [ "pca", "dens" ];

var cssText = ["stroke-width:1; stroke-opacity:0.4",
               "stroke-width:3; stroke-opacity:1" ];

// Global variables - these are set up below by 'reportinit'
var tables;             // array of all the associated ('tooltips') tables on the page
var checkboxes;         // the checkboxes
var ssrules;


function reportinit() 
{
 
    var a, i, status;

    /*--------find checkboxes and set them to start values------*/
    checkboxes = document.getElementsByName("ReportObjectCheckBoxes");
    if(checkboxes.length != highlightInitial.length)
	throw new Error("checkboxes.length=" + checkboxes.length + "  !=  "
                        + " highlightInitial.length="+ highlightInitial.length);
    
    /*--------find associated tables and cache their locations------*/
    tables = new Array(svgObjectNames.length);
    for(i=0; i<tables.length; i++) 
    {
        tables[i] = safeGetElementById("Tab:"+svgObjectNames[i]);
    }

    /*------- style sheet rules ---------*/
    var ss = document.styleSheets[0];
    ssrules = ss.cssRules ? ss.cssRules : ss.rules; 

    /*------- checkboxes[a] is (expected to be) of class HTMLInputElement ---*/
    for(a=0; a<checkboxes.length; a++)
    {
	checkboxes[a].checked = highlightInitial[a];
        status = checkboxes[a].checked; 
        setReportObj(a+1, status, false);
    }

}


function safeGetElementById(id)
{
    res = document.getElementById(id);
    if(res == null)
        throw new Error("Id '"+ id + "' not found.");
    return(res)
}

/*------------------------------------------------------------
   Highlighting of Report Objects 
 ---------------------------------------------------------------*/
function setReportObj(reportObjId, status, doTable)
{
    var i, j, plotObjIds, selector;

    if(doTable) {
	for(i=0; i<svgObjectNames.length; i++) {
	    showTipTable(i, reportObjId);
	} 
    }

    /* This works in Chrome 10, ssrules will be null; we use getElementsByClassName and loop over them */
    if(ssrules == null) {
	elements = document.getElementsByClassName("aqm" + reportObjId); 
	for(i=0; i<elements.length; i++) {
	    elements[i].style.cssText = cssText[0+status];
	}
    } else {
    /* This works in Firefox 4 */
    for(i=0; i<ssrules.length; i++) {
        if (ssrules[i].selectorText == (".aqm" + reportObjId)) {
		ssrules[i].style.cssText = cssText[0+status];
		break;
	    }
	}
    }

}

/*------------------------------------------------------------
   Display of the Metadata Table
  ------------------------------------------------------------*/
function showTipTable(tableIndex, reportObjId)
{
    var rows = tables[tableIndex].rows;
    var a = reportObjId - 1;

    if(rows.length != arrayMetadata[a].length)
	throw new Error("rows.length=" + rows.length+"  !=  arrayMetadata[array].length=" + arrayMetadata[a].length);

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = arrayMetadata[a][i];
}

function hideTipTable(tableIndex)
{
    var rows = tables[tableIndex].rows;

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = "";
}


/*------------------------------------------------------------
  From module 'name' (e.g. 'density'), find numeric index in the 
  'svgObjectNames' array.
  ------------------------------------------------------------*/
function getIndexFromName(name) 
{
    var i;
    for(i=0; i<svgObjectNames.length; i++)
        if(svgObjectNames[i] == name)
	    return i;

    throw new Error("Did not find '" + name + "'.");
}


/*------------------------------------------------------------
  SVG plot object callbacks
  ------------------------------------------------------------*/
function plotObjRespond(what, reportObjId, name)
{

    var a, i, status;

    switch(what) {
    case "show":
	i = getIndexFromName(name);
	showTipTable(i, reportObjId);
	break;
    case "hide":
	i = getIndexFromName(name);
	hideTipTable(i);
	break;
    case "click":
        a = reportObjId - 1;
	status = !checkboxes[a].checked;
	checkboxes[a].checked = status;
	setReportObj(reportObjId, status, true);
	break;
    default:
	throw new Error("Invalid 'what': "+what)
    }
}

/*------------------------------------------------------------
  checkboxes 'onchange' event
------------------------------------------------------------*/
function checkboxEvent(reportObjId)
{
    var a = reportObjId - 1;
    var status = checkboxes[a].checked;
    setReportObj(reportObjId, status, true);
}


/*------------------------------------------------------------
  toggle visibility
------------------------------------------------------------*/
function toggle(id){
  var head = safeGetElementById(id + "-h");
  var body = safeGetElementById(id + "-b");
  var hdtxt = head.innerHTML;
  var dsp;
  switch(body.style.display){
    case 'none':
      dsp = 'block';
      hdtxt = '-' + hdtxt.substr(1);
      break;
    case 'block':
      dsp = 'none';
      hdtxt = '+' + hdtxt.substr(1);
      break;
  }  
  body.style.display = dsp;
  head.innerHTML = hdtxt;
}
