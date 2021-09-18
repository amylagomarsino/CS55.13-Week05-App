import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export function getAllIds() {
  const filePath = path.join(dataDir, 'threestooges.json');
  const filePath2 = path.join(dataDir, 'goldengirls.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonString2 = fs.readFileSync(filePath2, 'utf8');
  const jsonObj = JSON.parse(jsonString);
  const jsonObj2 = JSON.parse(jsonString2);
  const jsonObj3 = jsonObj.concat(jsonObj2);
  return jsonObj3.map(item => {
    return {
      params: {
        id: item.id.toString()
      }
    }
  });
}

export function getSortedList() {
  const filePath = path.join(dataDir, 'threestooges.json');
  const filePath2 = path.join(dataDir, 'goldengirls.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonString2 = fs.readFileSync(filePath2, 'utf8');
  const jsonObj = JSON.parse(jsonString);
  const jsonObj2 = JSON.parse(jsonString2);
  const jsonObj3 = jsonObj.concat(jsonObj2);
  jsonObj.sort(function (a, b) {
      return a.name.localeCompare(b.name);
  });
  return jsonObj3.map(item => {
    return {
      id: item.id.toString(),
      name: item.name
    }
  });
}

export async function getData(idRequested) {
  const filePath = path.join(dataDir, 'threestooges.json');
  const filePath2 = path.join(dataDir, 'goldengirls.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonString2 = fs.readFileSync(filePath2, 'utf8');
  const jsonObj = JSON.parse(jsonString);
  const jsonObj2 = JSON.parse(jsonString2);
  const jsonObj3 = jsonObj.concat(jsonObj2);
  const objMatch = jsonObj.filter(obj => {
    return obj.id.toString() === idRequested;
  });

  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }
  return objReturned;
}