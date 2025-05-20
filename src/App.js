import './App.css';

function Profile() {
  return (
    <>
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  );
}

function Gallery() {
  return (
    <section>
      <h1>Test</h1>
      <Profile />
    </section>
  );
}

export default Gallery;