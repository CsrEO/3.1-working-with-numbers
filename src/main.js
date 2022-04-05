import input from 'input';
 
async function askStuff() {
  const result = await input.text('Dogs or Cats?');
 
 console.log(result);
}
 
askStuff();