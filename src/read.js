
import XLSX from 'xlsx';
import excelNode from 'excel4node';

const workbook = XLSX.readFile('competitors.xlsx');



let worksheets = {};

for (const sheetName of workbook.SheetNames) {
  worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

}

console.log(worksheets.Sheet1)

const mapWorkSheet = worksheets.Sheet1.map(item => ({
  time:  item.__EMPTY_1 || ' ',
  slug: item.__EMPTY_2 || ' ',
  srTime: undefined,
  srSlug: undefined,
  competition: item.__EMPTY_3 || ' ',
  darkLight: item.__EMPTY_4 || ' '
}))


const data = mapWorkSheet

console.log(data)

const wb = new excelNode.Workbook();

const ws = wb.addWorksheet('competitors');


const headingColumnNames = [ 'TIME', 'Slug (?)', 'srTIME', 'srSlug', 'CATEGORIA', 'MUDANÇA DE DARK / LIGHT MODE'];

let headingColumnNamesIndex = 1;
headingColumnNames.forEach(heading => {
  ws.cell(1, (headingColumnNamesIndex += 1)).string(heading);
});

let rowIndex = 2;
data.forEach(record => {
  let columnIndex = 1;
  Object.keys(record).forEach(columnName => {
    ws.cell(rowIndex, (columnIndex += 1)).string(record[columnName]);
  });

  rowIndex += 1;
});

wb.write('slugOrCompetitor.xlsx');
