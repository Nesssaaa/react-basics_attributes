import React from "react";
import "./styles.css";

export default function App() {
  return (
  <article>
    <h2 className="article__title">
      My new article
    </h2>
    <label htmlFor="article__check">Check when you have read this article</label>
    
    <input id="article__check" name="article__check" type="checkbox"></input>
    <br></br>
    <br></br>
    <a className="article__llink" href="https://de.wikipedia.org/wiki/Wichtel" aria-label="Link to an article about Wichtel">Link to an article about Wichtel/ Gnomes </a>
  </article>
  );
}
