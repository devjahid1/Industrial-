import logo from "../../assets/image 1.png"
const Footer = () => {
    return (
        <div>
<footer className="footer bg-black text-neutral-content p-16">
  <aside>
        <img className="lg:w-[150px] lg:h-[60.81px]" src={logo} alt="" />
    <p>
    As a growing company, we offer exciting and rewarding opportunities <br /> - in a safe work environment. On the Gaylor team, you will have our <br /> continuous support to reach your professional and personal goals. <br /> You will participate in world-class training and have access to <br />innovative industry technologies. 
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

<hr />


<div className="bg-black text-white flex items-center">
<footer className="footer  text-white p-4 text-left w-1/2">
        <div className="ml-[40px]">
        <aside>
    <p>Copyright © {new Date().getFullYear()} -  GAYLOR All right </p>
  </aside>
        </div>
</footer>
<div>
    <ul className="flex gap-5 ml-[280px]">
        <li>Privacy & Policy</li>
        <li>Terms & Conditions</li>
    </ul>
</div>
</div>


</div>
    );
};

export default Footer;