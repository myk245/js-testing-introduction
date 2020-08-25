const puppeteer = require('puppeteer'); 
const { generateText, checkAndGenerate } = require('./util');

// unit test
test('should output name and age', () => {
   const text = generateText('Cindy', 28); 
   expect(text).toBe('Cindy (28 years old)');
}); 

// unit test -- tests for false positives
test('should output dataless text', () => {
   const text = generateText('', null);
   expect(text).toBe(' (null years old)');
});  

// integration test
test('should generate a valid text output', () => {
   const text = checkAndGenerate('Cindy', 28);
   expect(text).toBe('Cindy (28 years old)'); 
}); 

// end-to-end testing with puppeteer
test('should click around', async () => {
   const browser = await puppeteer.launch({
      headless: true
      // slowMo: 80,
      // args: ['--window-size=1920, 1080']
   }); 
   const page = await browser.newPage(); 
   await page.goto('file:///Users/cindykei/Desktop/Coding%20Projects/js-testing-introduction/index.html'); 
   await page.click('input#name');
   await page.type('input#name', 'Cindy');
   await page.click('input#age');
   await page.type('input#age', '28'); 
   await page.click('#btnAddUser');
});