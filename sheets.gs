function cleanData() {
  
  // Magic numbers
  const randIdStart = 26;
  const randIdLen = 5;
  const randIdCol = 3;

  // Get spreadsheet, first sheet, and last column
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheets()[0];
  let lastColIndex = sheet.getLastColumn();

  // Get random id
  let randomId = sheet.getRange(1, lastColIndex).getValue().substring(randIdStart, randIdStart + randIdLen + 1);
  Logger.log(randomId);

  // Copy random id into third column
  sheet.getRange(lastColIndex - 1, randIdCol).setValue(randomId);

  // Clear last column
  sheet.getRange(1,
                lastColIndex,
                sheet.getMaxColumns()).clear();
  //sheet.hideColumns(lastColIndex);

  // Rename third column (necessary for first case)
  sheet.getRange(1, randIdCol).setValue("RANDOM_ID");
  Logger.log("Renamed column")
}
