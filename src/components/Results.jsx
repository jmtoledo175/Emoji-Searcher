import { searchEmoji } from "../helpers/SearchEmoji.js";
import Item from "./Item.jsx";
const Result = ({ valueEmoji, darkMode }) => {
  const arrayEmojis = searchEmoji(valueEmoji);

  return (
    <section className="container results">
      {arrayEmojis &&
        arrayEmojis.map((item) => (
          <Item
            key={item.title}
            title={item.title}
            emoji={item.symbol}
            darkMode={darkMode}
          />
        ))}
    </section>
  );
};
export default Result;
