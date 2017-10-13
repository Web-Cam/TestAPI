const datamuse = require('datamuse');
function getRhyme(){
datamuse.words({
	rel_rhy: rhyme
})
.then((json) => {
rhymes = console.log(json);
  //do it!
});
}