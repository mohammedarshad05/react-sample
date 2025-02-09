import meimg from "../assets/me.jpg";
function About() {
  return (
    <div className="container">
    <div className="row">
        <div className="col-lg-12 text-center mt-5">
            <h1>About Us</h1>
            <p className="lead">Welcome to our website!</p>
        </div>
    </div>
    <div className="row mt-4">
        <div className="col-lg-4">
            <img src={meimg} className="img-fluid rounded-circle" alt="Mohammed Arshad" />
        </div>
        <div className="col-lg-8">
            <h2>Mohammed Arshad</h2>
            <p>Hi, I'm Mohammed Arshad. I'm passionate about technology and innovation. I strive to create solutions that make a difference in people's lives. Welcome to our website, and feel free to reach out if you have any questions!</p>
        </div>
    </div>
</div>
  );
}
export default About;