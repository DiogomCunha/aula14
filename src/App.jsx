import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getUsers() {
    setLoading(true);

    try {
      const response = await fetch(`https://dummyjson.com/users`);
      const data = await response.json();
      console.log(data.users)
      setUsers(data.users);
    } catch (erro) {
      alert("Erro ao realizar a busca!");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return(
    <div>
      <h1>Usuarios</h1>
      {loading === true ? "Busacando...": null}
      {loading === false && users.length < 1 ? "Nenhum produto encontrado!": null}
      <ul>
        {users.map((user)=>(
           <li key={user.id} style={{border: "1px solid blue", marginBottom: 10 }}>
            <h3>{user.firstName}</h3>
            <h4>{user.lastName}</h4>
            <p>Idade: {user.age}</p>
            <p>Usuario: {user.username}</p>
            <img src={user.image} height={200} alt="" />

           </li>

        ))}
       
      </ul>
    </div>
  )
}

export default App;
