const { generateText } = require('./util');

test('should output name and age', () => {
   const text = generateText('Cindy', 28); 
   expect(text).toBe('Cindy (28 years old)');
}); 

test('should output dataless text', () => {
   const text = generateText('', null);
   expect(text).toBe(' (null years old)');
});  