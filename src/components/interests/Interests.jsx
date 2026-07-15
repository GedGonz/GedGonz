import React from "react";
import { hobbies, books, booksReadCount, goodreadsUrl } from "../../data/interests";
import "./Interests.css";

export default function Interests() {
  return (
    <section id="interests" className="interests-section">
      <div className="container">
        <div className="about text-center reveal">
          <h3>Sobre mi e intereses</h3>
          <span className="section-underline"></span>
          <p className="interests-intro">
            Fuera del código, estas son algunas de las cosas que
            disfruto y que me mantienen curioso.
          </p>
        </div>

        <div className="hobbies-grid">
          {hobbies.map((hobby) => (
            <article className="hobby-card reveal" key={hobby.id}>
              <span className="hobby-emoji" aria-hidden="true">
                {hobby.emoji}
              </span>
              <h4 className="hobby-title">{hobby.title}</h4>
              <p className="hobby-description">
                {hobby.description}
              </p>
            </article>
          ))}
        </div>

        <div className="books-block reveal">
          <div className="books-header">
            <div className="books-title">
              <h4>Algunas lecturas</h4>
              <span className="books-count">
                {booksReadCount} libros leídos
              </span>
            </div>
            <a
              href={goodreadsUrl}
              target="_blank"
              rel="noreferrer"
              className="books-link"
            >
              Ver todo en Goodreads
              <i className="fa fa-external-link"></i>
            </a>
          </div>
          <ul className="books-list">
            {books.map((book) => (
              <li className="book-item" key={book.id}>
                <i className="fa fa-book" aria-hidden="true"></i>
                <span className="book-title">{book.title}</span>
                {book.author && (
                  <span className="book-author">
                    {book.author}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
