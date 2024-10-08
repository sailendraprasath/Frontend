import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div
        id="demo"
        className="carousel slide max-w-full mx-auto"
        data-bs-ride="carousel"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.hdqwalls.com/wallpapers/switzerland-hills-mountains-et.jpg"
              alt="img1"
              className="d-block w-full max-h-[500px] object-cover"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.hdqwalls.com/wallpapers/dreamy-landscape-4k-wv.jpg"
              alt="img2"
              className="d-block w-full max-h-[500px] object-cover"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.hdqwalls.com/wallpapers/switzerland-hills-mountains-et.jpg"
              alt="img3"
              className="d-block w-full max-h-[500px] object-cover"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.hdqwalls.com/wallpapers/dreamy-landscape-4k-wv.jpg"
              alt="img4"
              className="d-block w-full max-h-[500px] object-cover"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.hdqwalls.com/wallpapers/switzerland-hills-mountains-et.jpg"
              alt="img5"
              className="d-block w-full max-h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
