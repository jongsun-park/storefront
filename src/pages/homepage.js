import { Container } from "../components/common/container";
import { StyledButton } from "../components/common/button";
import { Image } from "../components/common/image";
import Collections from "../components/section/collections";

// images
import hero from "../assets/images/hero.jpg";
import blue from "../assets/images/blue-toy.jpg";
import will1 from "../assets/images/will-1.jpg";
import will2 from "../assets/images/will-2.jpg";
import will3 from "../assets/images/will-3.jpg";
import cartoons from "../assets/images/cartoons.jpg";
import quote from "../assets/images/quote.svg";
import mat from "../assets/images/mat.jpg";

const Homepage = () => {
  return (
    <>
      <Container className="hero" fullwidth background={`url(${hero})`}>
        <h2 className="hero__title">
          Chic handbags reimagined for modern life.
        </h2>
        <StyledButton>SHOP NOW</StyledButton>
      </Container>
      <Container className="row">
        <div className="col">
          <Image contain url={blue} />
        </div>
        <div className="col content">
          <h2 className="section__title">
            Designed for fashion. Crafted for sport.
          </h2>
          <p className="section__body">
            We make products that effortlessly transition from day to night.
            From the board room to the fitness studio, and everywhere in
            between, each Nomads piece is thoughtfully created to be the perfect
            balance of form and function.
          </p>
          <StyledButton>STUDIO BAG</StyledButton>
        </div>
      </Container>
      <Container className="row">
        <div className="col">
          <Image url={will1} className="col-3" />
          <h3 className="section__title small">Luxury materials</h3>
          <p className="section__body">
            Constructed from luxury nylons, leathers, and custom hardware,
            featuring sport details such as hidden breathing vents, waterproof +
            antimicrobial linings, and more.
          </p>
        </div>
        <div className="col">
          <Image url={will2} className="col-3" />
          <h3 className="section__title small">Thoughtful design</h3>
          <p className="section__body">
            Your bag is your ultimate companion and should be thoughtfully
            designed with your lifestyle in mind. Keep up with your love of
            exercise and travel in comfort and style.
          </p>
        </div>
        <div className="col">
          <Image url={will3} className="col-3" />
          <h3 className="section__title small">Well-crafted</h3>
          <p className="section__body">
            We design versatile and smart-looking sports bags that can
            transition from street to fitness studio, business meeting to
            dinner, and everywhere in between
          </p>
        </div>
      </Container>
      <Container>
        <Collections />
      </Container>
      <Container fullwidth cover background={`url(${cartoons})`}>
        <p className="section__title small white">
          Why choose between fashion and function? Our bags combine high-quality
          fabrics and hardware with sport functionality.
        </p>
      </Container>
      <Container className="row quote">
        <div className="col">
          <img src={quote} alt="quote-icon" className="quote-icon" />
          <p className="quote__text">
            Every woman needs that one bag she can take everywhere: class, work,
            the gym or social events. This piece from Nomads may just be it.
            Removable straps convert it to a backpack, and it even has a hidden
            shoe compartment.
          </p>
          <cite className="quote__cite">The New York Times</cite>
        </div>
        <div className="col">
          <img src={quote} alt="quote-icon" className="quote-icon" />
          <p className="quote__text">
            There's a luxury mindset at the core of Nomads' design philosophy,
            and it's clearly visible in the product. Both the duffle and
            backpack are minimalistic, but sophisticated — the perfect
            combination for an everyday bag.
          </p>
          <cite className="quote__cite">Esquire</cite>
        </div>
        <div className="col">
          <img src={quote} alt="quote-icon" className="quote-icon" />
          <p className="quote__text">
            My Studio Bag 2 carries me from work, to workouts, to bagless
            grocery shopping, and to even sneaking wine into movie theaters
            Sorry to brag, but people stop me in the street all the time to ask
            me where I got it.
          </p>
          <cite className="quote__cite">New York Magazine</cite>
        </div>
      </Container>
      <Container fullwidth cover background={`url(${mat})`}></Container>
      <Container className="row">
        <div className="col quicklinks">
          <p className="footer--col__heading">Quick links</p>
          <ul>
            <li>Search</li>
            <li>Shipping and Return Policy</li>
            <li>Terms of Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col newsletter">
          <p className="footer--col__heading">Newsletter</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
            ></input>
            <button type="submit" className="dark">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Homepage;
