// Google Apps Script: paste into script.google.com attached to a Google Sheet
const HEAD=['ts','date','name','world','level','mode','gc','ok','tasks','rate','minutes','st','wk','note'];
function doPost(e){
  const sh=SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if(sh.getLastRow()==0) sh.appendRow(HEAD);
  const r=JSON.parse(e.postData.contents);
  sh.appendRow(HEAD.map(k=>r[k]===undefined?'':r[k]));
  return ContentService.createTextOutput('ok');
}
