import logo from '../images/logo/nyatta_logo.png';
export default function Navbar() {
    return (
    <nav className="p-4, flex" >
      <img src={logo} alt="Logo" className="w-40" />
      <ul className="flex space-x-9 items-center px-20 ml-auto font-semibold">
        <li><a href="#home">Home</a></li>
        <li><a href="#hotelRooms">Hotel Rooms</a></li>
        <li><a href="#aboutUs">About Us</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contactUs">Contact Us</a></li>
      </ul> 
    </nav>
);
};

             