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
import facebook from "../images/icons/facebook.png";
import whatssApp from "../images/icons/chat.png";
import instagram from "../images/icons/instagram.png";
import twitter from "../images/icons/twitter.png";
import pinterest from "../images/icons/pinterest.png";
export default function Body() {
  return (
    <div className="flex font-luxjost flex-col">
      <div className="flex mt-10 space-x-5 p-10">
        <div className="pt-5">
          <div>
            <h4 className="font-luxjost font-bold text-3xl text-center ">
              Welcome to Nyatta Homes.
            </h4>
          </div>
          <div className="mt-5 font-luxjost text-lg leading-9 px-10 ">
            <h1>
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              '
            </h1>
          </div>
        </div>
        <div>
          <img src={bedroom4} alt="bedroom 1" className="w-100 rounded-2xl" />
        </div>
      </div>
      <div className="flex mt-10 space-x-5  flex-row-reverse font-luxjost p-10">
        <div className="pt-10">
          <div>
            <h4 className="font-bold text-2xl px-10">Our Mission</h4>
          </div>

          <div className="mt-3 text-lg  leading-9 px-10">
            <h1>
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </h1>
          </div>
          <h4 className="mt-8 font-bold text-2xl px-10">Our Vision</h4>
          <div className="mt-3 text-lg leading-9 px-10">
            <h1>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis pretium. Integer
              tincidunt. Cras dapibus. Vivamus elementum '
            </h1>
          </div>
        </div>
        <div>
          <img
            src={bedroom1}
            alt="bedroom 1"
            className="w-[2000px] rounded-2xl"
          />
        </div>
      </div>
      <div className="bg-orange-100">
        <h1 className="flex pt-10 justify-center text-4xl">
          What Sets Us Apart
        </h1>
        <div className="flex space-x-1 justify-around px-10 font-medium pb-3 text-lg ">
          <div className="flex flex-col items-center ">
            <img
              src={handpickerAccomocation}
              alt="1"
              className="w-[300px] h-[300px]"
            />
            <div>Handpicked Accomodation</div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={personalizedService}
              alt="2"
              className="w-[300px] h-[300px]"
            />
            <div>Personalized Service</div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={empoweringProperty}
              alt="3"
              className="w-[350px] h-[300px]"
            />
            <div>Empowering Property Owners</div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-center text-4xl">Book Our Best Suite Now</div>
        <div className="flex justify-center mt-10 space-x-24 px-16 rounded-sm">
          <div className="flex flex-col justify-center shadow-xl p-3">
            <img src={bedroom2} alt="3" className="w-[350px] h-[250px] " />
            <div className="font-medium py-2 tracking-wider   ">
              SUPERIOR ROOM
            </div>
            <div className="tracking-wider" >30 M sqrt / 322 FT sqrt | City wiew</div>
            <div className="font-small font-mono pt-3">FROM</div>
            <div className="font-medium flex">
              KES 10,000
              <div className="flex justify-center items-center ml-32">
                <button
                  type="button"
                  className="flex justify-center items-center px-8 py-2 text-lg bg-orange-400 text-white  hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50"
                >
                  SELECT
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center shadow-xl p-3">
            <img src={bedroom5} alt="3" className="w-[350px] h-[250px] " />
            <div className="font-medium py-2 tracking-wider ">
              SUPERIOR ROOM
            </div>
            <div className="tracking-wider" >30 M sqrt / 322 FT sqrt | City wiew</div>
            <div className="font-small font-mono pt-3">FROM</div>
            <div className="font-medium flex">
              KES 10,000
              <div className="flex justify-center items-center ml-32">
                <button
                  type="button"
                  className="flex justify-center items-center px-8 py-2 text-lg bg-orange-400 text-white  hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50"
                >
                  SELECT
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center shadow-xl p-3">
            <img src={bedroom4} alt="3" className="w-[350px] h-[250px] " />
            <div className="font-medium py-2 tracking-wider ">
              SUPERIOR ROOM
            </div>
            <div className="tracking-wider" >30 M sqrt / 322 FT sqrt | City wiew</div>
            <div className="font-small font-mono pt-3">FROM</div>
            <div className="font-medium flex">
              KES 10,000
              <div className="flex justify-center items-center ml-32">
                <button
                  type="button"
                  className="flex justify-center items-center px-8 py-2 text-lg bg-orange-400 text-white  hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50"
                >
                  SELECT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-10  pt-20">
        <div className=" border-orange-300 border-t-2 w-[1300px]"></div>
      </div>
      <div className="m-20 items-center">
        <div className=" flex text-9xl justify-center">Our Happy</div>
        <div className=" flex text-9xl justify-center">Customers</div>
        <div className="flex flex-col mt-10">
          <img src={quot} alt="3" className="w-[50px] h-[50px] ml-96" />
          <div className="flex ">
            <img
              src={testimony1}
              alt="3"
              className="w-[700px] h-[400px] rounded-full ml-12"
            />

            <div className=" pl-10 pr-72">
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              '
              <div className="relative text-4xl pt-24 italic ">
                {" "}
                Ang'edu Jude{" "}
              </div>
              <div className="flex space-x-10  mt-12 ml-40">
                <img src={left} alt="3" className="w-[50px] h-[50px] ml-96" />
                <img src={right} alt="3" className="w-[50px] h-[50px] ml-96" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-orange-400 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 px-28 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Hotel Rooms</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Gallery</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Information</h3>
          <p className="mb-2">Phone: 0712165017</p>
          <p>Email: <a href="mailto:nyattahomes@gmail.com" className="hover:underline">nyattahomes@gmail.com</a></p>
        </div>

        {/* Connect with Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">Connect with Us</h3>
          <p>Contact us by filling the form on our contact page or through:</p>
          <p className="mt-2">Phone: 0712165017</p>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex flex-col space-y-4">
            <img src={instagram} alt="3" className=" h-12 w-12 hover:text-white-400" />
            <img src={facebook} alt="3" className="  h-12 w-12  hover:text-gray-400" />
            <img src={pinterest} alt="3" className="  h-12 w-12  hover:text-gray-400" />
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
