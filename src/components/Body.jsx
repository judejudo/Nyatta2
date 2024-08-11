import bedroom4 from "../images/bedrooms/bedroom4.jpg";
import bedroom5 from "../images/bedrooms/bedroom5.jpg";
import bedroom2 from "../images/bedrooms/bedroom2.jpg";
import empoweringProperty from "../images/illustrations/empoweringProperty.png";
import handpickerAccomocation from "../images/illustrations/handpickerAccomocation.png";
import personalizedService from "../images/illustrations/personalizedService.png";
import testimony1 from "../images/persons/customer1.jpg";
import bedroom1 from "../images/bedrooms/bedroom1.jpg";
import quot from "../images/icons/quotation.png";
import left from "../images/icons/left.png";
import right from "../images/icons/right.png";

export default function Body() {
  return (
    <div className="flex font-luxjost flex-col">
      <div className="flex flex-col md:flex-row mt-10 space-y-5 md:space-x-5 p-10">
        <div className="pt-5">
          <div>
            <h4 className="font-luxjost font-bold text-3xl text-center md:text-left">
              Welcome to Nyatta Homes.
            </h4>
          </div>
          <div className="mt-5 font-luxjost text-lg leading-9 px-2 md:px-10">
            <h1>
              At Nyatta Homes, we believe that travel should be more than just a
              journey—it should be an unforgettable experience that leaves you
              with cherished memories. Nestled in the heart of the picturesque
              town of Narok, Kenya, we are a boutique BNB agency dedicated to
              curating exceptional stays for travelers seeking authenticity,
              comfort, and personalized hospitality.
            </h1>
          </div>
        </div>
        <div>
          <img src={bedroom4} alt="bedroom 1" className=" md:w-[2000px] md:h-[400px] rounded-2xl" />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row mt-10 space-y-5 md:space-x-5 p-10">
        <div className="pt-10">
          <div>
            <h4 className="font-bold text-2xl px-2 md:px-10">Our Mission</h4>
          </div>

          <div className="mt-3 text-lg leading-9 px-2 md:px-10">
            <h1>
              To curate exceptional travel experiences by connecting guests with
              distinctive and comfortable accommodations, while empowering
              property owners to maximize the potential of their assets.
            </h1>
          </div>
          <h4 className="mt-8 font-bold text-2xl px-2 md:px-10">Our Vision</h4>
          <div className="mt-3 text-lg leading-9 px-2 md:px-10">
            <h1>
              To become the premier BNB agency in Kenya, known for unparalleled
              customer service, diverse property offerings, and sustainable
              business practices.
            </h1>
          </div>
        </div>
        <div>
          <img
            src={bedroom1}
            alt="bedroom 1"
            className="w-full rounded-2xl"
          />
        </div>
      </div>


      <div className="flex justify-center p-10 pt-20">
        <div className="border-orange-300 border-t-2 w-full max-w-screen-lg"></div>
      </div>

      <div className="m-10 md:m-20 items-center">
        <div className="flex flex-col text-5xl md:text-9xl justify-center items-center">
          <div>Our Happy</div>
          <div>Customers</div>
        </div>
        <div className="flex flex-col mt-10">
          <img src={quot} alt="Quotation Mark" className="w-[50px] h-[50px] mx-auto" />
          <div className="flex flex-col md:flex-row items-center mt-5 md:mt-10">
            <img
              src={testimony1}
              alt="Customer Testimony"
              className="w-full md:w-[200px] h-auto rounded-full mx-auto md:ml-12"
            />
            <div className="mt-5 md:mt-0 md:pl-10 md:pr-72 text-center md:text-left">
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              '
              <div className="relative text-2xl md:text-4xl pt-10 md:pt-24 italic">
                Ang'edu Jude
              </div>
              <div className="flex space-x-10 mt-12 justify-center md:justify-start">
                <img src={left} alt="Previous" className="w-[50px] h-[50px]" />
                <img src={right} alt="Next" className="w-[50px] h-[50px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
