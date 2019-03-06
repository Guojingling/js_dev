import {expect} from 'chai';
import jsdom from 'jsdom';
//import fs from 'fs';


describe('Our first test', () => {
  it('should pass', ()=>{
    expect(true).to.equal(true);
  });
});

const options = {
  contentType: 'text/html',
};


describe('index.html', () => {
  it('should say hello', ()=>{
    //const index = fs.readFileSync('./src/index.html', "utf-8");
    //jsdom.env(index, function(err, window){
      //const h1 = window.document.getElementsByTagName('h1')[0];
      //expect(h1.innerHTML).to.equal("Hello World!");
      //window.close();
    //});
    return jsdom.JSDOM.fromFile('./src/index.html', options).then((dom) => {
      const h1 = dom.window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World?");
    });

  });
});
