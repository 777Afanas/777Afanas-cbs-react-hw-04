export default function ArticleView({ article: { topic, text }, textColor }) {
  return (
    <article>
      <h1>{topic}</h1>
      <p>{text}</p>
    </article>
  );
}
