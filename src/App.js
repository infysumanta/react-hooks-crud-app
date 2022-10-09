import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  let [name, setName] = useState("");
  let [username, setUserName] = useState("");
  let [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && username) {
      let obj = { name, username };
      setData(data.concat(obj));
      setName("");
      setUserName("");
      localStorage.setItem("data", JSON.stringify(data.concat(obj)));
    }
  };

  const handleChange = ({ target }) => {
    let { id } = target.dataset;
    if (id === "name") {
      setName(target.value);
    }
    if (id === "username") {
      setUserName(target.value);
    }
  };

  const handleDelete = (id) => {
    let newData = [...data];
    newData.splice(id, 1);
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  return (
    <>
      <section>
        <h1>Users List</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            type="text"
            placeholder="Enter Name"
            onChange={handleChange}
            data-id="name"
          />
          <input
            value={username}
            type="text"
            placeholder="Enter Username"
            onChange={handleChange}
            data-id="username"
          />
          <button>Add User</button>
        </form>
        <div className="grid display">
          {data.length === 0 ? (
            <h2>No Users to display</h2>
          ) : (
            data.map((d, i) => {
              return (
                <div className="box" key={d.username}>
                  <div>
                    <h2>Name:{d.name}</h2>
                    <h2>Username: {d.username}</h2>
                  </div>
                  <div>
                    <Link
                      to={{
                        pathname: `/edit/${d.username}`,
                        id: i,
                      }}
                    >
                      <button className="edit">Edit</button>
                    </Link>
                    <button className="delete" onClick={() => handleDelete(i)}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </>
  );
}

export default App;
