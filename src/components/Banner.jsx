import Button from './Button';

const Banner = () => {
  // const loaded = useProgressiveImage(
  //   '../../assets/images/pexels-alexandr-podvalny-1227513.jpeg'
  // );

  return (
    <div className="banner page__container">
      <div className="banner__textContent-block">
        <h1 className="banner__title">
          Test assignment for front-end developer
        </h1>
        <p className="banner__textContent">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button classModificator="banner__btn">
          <a className="button__link" href="#sign-up">
            Sign up
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Banner;
