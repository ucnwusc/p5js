
var table;
var w,h;
var key1='a8cc4b2e-8e6b-419e-b0ed-4e68dc29ff42';
var key2='68de56c3-c21f-469e-9d33-88e7c769a846'
var url1='http://www.dictionaryapi.com/api/v1/references/collegiate/xml/';
var url2='http://www.dictionaryapi.com/api/v1/references/medical/xml/'
var k2='physiology?key=68de56c3-c21f-469e-9d33-88e7c769a846';
var myurl1s=[];
var myurl2s=[];
var str1;
var str2;
var i=0;
function preload() {
  table = loadTable("assets/word.csv", "csv", "header");
}
function setup() {
  //w=displayWeight;
  //h=displayHeight;
   //count the columns
  print(table.getRowCount() + " total rows in table");
  print(table.getColumnCount() + " total columns in table");
  print(table.getColumn("w4"));
  //["Goat", "Leopard", "Zebra"]

  
    can=createCanvas(600,600)
    can.position(0,0);
    
}

function draw() {
  background(0,0,0);
  //cycle through the table
  fill(0,0,255);
  i=0;
  for (var r = 0; r < table.getRowCount(); r++)
    for (var c = 0; c < table.getColumnCount(); c++) {
      str1=url1+table.getString(r, c)+'?key='+key1;
      str2=url2+table.getString(r, c)+'?key='+key2;
      myurl1s[i]=createA(str1,table.getString(r, c),'_blank');
      myurl1s[i].position(r*100,c*50+50);
      myurl2s[i]=createA(str2,table.getString(r, c),'_blank');
      myurl2s[i].position(r*100,c*50+500);
      i=i+1;

    }
}
function xml2json(xml) {
  try {
    var obj = {};
    if (xml.children.length > 0) {
      for (var i = 0; i < xml.children.length; i++) {
        var item = xml.children.item(i);
        var nodeName = item.nodeName;

        if (typeof (obj[nodeName]) == "undefined") {
          obj[nodeName] = xml2json(item);
        } else {
          if (typeof (obj[nodeName].push) == "undefined") {
            var old = obj[nodeName];

            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xml2json(item));
        }
      }
    } else {
      obj = xml.textContent;
    }
    return obj;
  } catch (e) {
      console.log(e.message);
  }
}