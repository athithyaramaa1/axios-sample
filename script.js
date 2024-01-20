let api = "https://jsonplaceholder.typicode.com/posts"

async function fetchapi() {
  let data = await axios.get(api)

 

  console.log(data.data)
}

fetchapi()

