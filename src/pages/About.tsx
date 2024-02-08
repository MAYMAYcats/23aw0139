import React from "react";
import { Link } from "react-router-dom";

interface Testimonial {
  id: number;
  author: string;
  content: string;
}

const About: React.FC = () => {
  // Массив с отзывами и рекомендациями
  const testimonials: Testimonial[] = [
    {
      id: 1,
      author: "Name",
      content:
        "TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText",
    },
    {
      id: 2,
      author: "Name",
      content:
        "TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText",
    },
  ];

  return (
    <div className="container mt-5">
      <h1>About Page</h1>
      <p>ようこそAboutへ</p>

      <div className="row">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="col-md-6 mb-4">
            <div className="card testimonial-card">
              <div className="card-body">
                <h5 className="card-title">{testimonial.author}</h5>
                <p className="card-text">{testimonial.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ссылка на домашнюю страницу */}
      <Link to="/" className="btn btn-primary">
        Go to Home Page
      </Link>
    </div>
  );
};

export default About;
