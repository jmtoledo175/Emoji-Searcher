import { useState } from "react";
const Form = ({ setValueEmoji, toggleDarkMode, darkMode }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
    if (value === "") {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    setValueEmoji(value);
  };
  const allEmojis = () => {
    setValueEmoji("");
  };

  return (
    <section className={`form ${darkMode ? "dark-mode" : ""}`}>
      <form action="" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="some emoji word..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="button" onClick={allEmojis}>
          All
        </button>
        <div className="toggle-box" onClick={toggleDarkMode}>
          <div className="toggle-circle"></div>
        </div>
      </form>
      {error && <p className="error">Input is empty</p>}
    </section>
  );
};
export default Form;
