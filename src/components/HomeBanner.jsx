import Carousel from 'react-bootstrap/Carousel';
import "./HomeBanner.css"

function HomeBanner() {
  return (
    <Carousel>
      <Carousel.Item>
       <img src="https://t4.ftcdn.net/jpg/06/91/17/95/360_F_691179587_QSctAaNAIbYMjexjEV3w8clmvzcXmJuU.jpg" alt=""  />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://www.portfoliogroup.ie/custom/public/images/technology-gadgets-banner-1.jpg" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://c8.alamy.com/comp/2D5AYBM/online-shopping-or-big-sale-in-electronics-store-concept-on-black-web-banner-background-laptop-computer-surrounded-by-smartphone-credit-card-parcel-2D5AYBM.jpg" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default  HomeBanner;