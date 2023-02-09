async function firstSixIncomplete(completed) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

  const result = await promise.json();

    const todos = result.filter((element) => !element.completed).slice(0,6);

    console.log(todos);
  
}


firstSixIncomplete(6);
