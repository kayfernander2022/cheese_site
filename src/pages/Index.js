import { Link, useLoaderData, Form} from "react-router-dom"

function Index(props) {
  const cheese = useLoaderData()

  return (
    <div>
      <h2>Add a cheese here:</h2>
      <Form action="/create" method="post">
        <input type="input" name="name" placeholder="cheese name" />
        <input type="input" name="image" placeholder="cheese picture" />
        <input type="input" name="countryOfOrigin" placeholder="Origin" />
        <input type="submit" value="create cheese" />
      </Form>

<h2>Cheese List</h2>
<div className="container">
  {cheese.map(cheese => (
    <div key={cheese._id} className="card">
      <Link to={`/${cheese._id}`}>
        <h1>{cheese.name}</h1>
      </Link>
      <img src={cheese.image} alt={cheese.name} />
      <h3>Country Of Origin: {cheese.countryOfOrigin}</h3>
    </div>
  ))}
</div>
  </div>
  )}

export default Index

  