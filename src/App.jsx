import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `https://wa.me/6281230677319?text=Nama: ${name}, Email: ${email}, ${message}`;
    window.open(url, "_blank");

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">How Can We Help You?</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              cols="50"
              required=""
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            >
              {" "}
            </textarea>
          </div>
          <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default App;
