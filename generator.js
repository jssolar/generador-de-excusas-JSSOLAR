export function generador(ele) {
  
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = ["before the class","right on time","when I finished","during my lunch","while I was praying"];


  for(let i of who){
    who[Math.floor(Math.random() * who.length)];
  }

  for (let j of action) {
    action[Math.floor(Math.random() * action.length)];
  }
  
  for (let k of what) {
    what[Math.floor(Math.random() * what.length)];
  }
  
  for (let l of when) {
    when[Math.floor(Math.random() * when.length)];
  }



  let azaar = `
  ${who[Math.floor(Math.random() * who.length)]} 
  ${action[Math.floor(Math.random() * action.length)]} 
  ${what[Math.floor(Math.random() * what.length)]} 
  ${when[Math.floor(Math.random() * when.length)]}
  `

    ele.innerHTML = azaar

    ele.addEventListener('click', function(event){
      // event.target.cursor="pointer"
      event.target.style="red"
})
  }


