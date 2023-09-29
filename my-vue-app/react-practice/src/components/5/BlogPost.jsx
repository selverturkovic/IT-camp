import "./BlogPost.css";
const BlogPost = () => {
  return (
    <div className="container">
      <div className="blogLeft">
        <p className="title">CATEGORY</p>
        <p className="subtitle">12 jun 2019</p>
      </div>
      <div className="blogRight">
        <p className="blogTitle">
          Bitters Hastag waistcoat fashion axe chia unicorn
        </p>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          pariatur, illo maxime adipisci cum necessitatibus iure accusamus
          perferendis dolor quae asperiores nobis libero enim ratione voluptas.
          Laborum commodi quas omnis?
        </p>
        <a className="link" href="http://www.google.com">
          Learn more{" "}
        </a>
      </div>
    </div>
  );
};
export default BlogPost;
