import { useLoaderData, Form } from "react-router-dom"

function Show(props) {
    const cheese = useLoaderData()
  
    return (
      <div className="show-card">
        <h1>{cheese.name}</h1>
        <img src={cheese.image} alt={cheese.name} />
        <h3>Country Of Origin: {cheese.countryOfOrigin}</h3>

        <h2>Edit {cheese.name}</h2>
      <Form action={`/update/${cheese._id}`} method="post">
      <input defaultValue={cheese.name} type="input" name="name" placeholder="Cheese name" />
  
        <input type="input" name="image" placeholder="Cheese image" />
        <input type="input" name="countryOfOrigin" placeholder="Enter an Origin" />
        <input type="submit" value={`Update ${cheese.name}`} />
      </Form>
      <h2>Delete {cheese.name}</h2>
      <Form action={`/delete/${cheese._id}`} method="post">
      <input type="submit" value={`Delete ${cheese.name}`} />
      </Form>
      </div>
    )
  }
  
  export default Show