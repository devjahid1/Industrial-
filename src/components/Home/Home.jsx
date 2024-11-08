import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/Auth";
import banner from "../../assets/image_2023-03-05_015627414-transformed 1.png";
import img2 from "../../assets/image 2.png";
import img3 from "../../assets/image 3.png";
import img4 from "../../assets/image 4.png";
import about from "../../assets/image_2023-03-04_203310729-transformed 1.png";
import imgs1 from "../../assets/Group 95.png"
import imgs2 from "../../assets/Mask group (1).png"
import imgs3 from "../../assets/Mask group (2).png"
import imgs4 from "../../assets/Mask group (3).png"
import blog1 from "../../assets/image 7.png"
import blog2 from "../../assets/image 8.png"
import blog3 from "../../assets/Mask group.png"
import profile1 from "../../assets/Ellipse 2549.png"
import profile2 from "../../assets/Ellipse 2550.png"

const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo);

  return (
    <div>
      {/* Banner */}
      <div
        className="hero h-[650px] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div>
            <p className="mb-5">The Best Electrical Contractor Out There</p>
            <h1 className="mb-5 text-5xl font-bold">
              It’s All About <span className="text-[#4BA0FF]">Reliability</span>
            </h1>
            <button className="btn bg-[#4BA0FF] hover:bg-[#4BA0FF] text-white">
              Join Us
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      
      <div className="h-[720px] bg-contain bg-no-repeat"
      style={{
        backgroundImage: `url(${about})`,
      }}
      >
        <div className="flex justify-around items-start pt-16">
        {/* Images Section */}
        <div className="relative flex flex-col items-center mt-10 space-y-8">
          <img className="absolute left-64 z-10 w-[417px] h-[457px]" src={img2} alt="Electrical work example 1" />
          <img className="relative -top-16 w-[364px] h-[237px]" src={img3} alt="Electrical work example 2" />
          <img className="relative bottom-8 w-[364px] h-[237px]" src={img4} alt="Electrical work example 3" />
        </div>

        {/* Text Section */}
        <div className="max-w-lg space-y-5">
          <h4 className="text-xl font-semibold">Our Story</h4>
          <h2 className="text-3xl font-bold">Who We Are?</h2>
          <p>
            In 1984, John Gaylor realized the need for an electrical contractor
            that encouraged open competition and a free-enterprise approach to
            construction based on merit. John was determined to provide
            first-class service and outstanding job performance for clients.
            For employees, he was intent on delivering the best wages and
            benefits, quality equipment, and continued education and training.
            These business ideals and values laid the solid foundation for what
            became Gaylor Electric.
          </p>
          <p>
            As the Highest Performing National Contractor of Excellence, Gaylor
            Electric offers complete design-build electrical construction and
            24/7 on-demand electrical support. Recognized by many world-renowned
            companies as one of the most forward-thinking organizations in the
            industry, Gaylor Electric delivers consistent excellence in
            innovation and quality to the customers we serve. Our teams of
            inspired employees provide an unparalleled commitment to cultivating
            strong business relationships, resulting in continued client
            loyalty.
          </p>
          <p className="text-blue-500">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>
    </div>

    {/* The Cornerstones */}
    <div className="bg-[#0057B8] h-[520px] ">
      <div className="lg:w-[840px] lg:m-auto text-center pt-10 space-y-2">
        <h5 className="text-[#FCFF62] text-[30px]">The Cornerstones</h5>
        <h2 className="text-white text-[55px]">Our Core Values</h2>
        <p className="text-white text-[20px]">As the Highest Performing National Contractor of Excellence, we deliver on our Cornerstone of Reliable Resources, Outcomes, Insights, and Genuine Care for People; dedicated to Innovation and Quality.</p>
      </div>

      <div className="mt-7 - lg:ml-[110px] lg:flex gap-5">

        <div className="bg-[#083971] lg:w-[300px] lg:h-[388px]">
          <div className="mt-[110px]">
          <img className="w-[120px] h-[120px] mx-auto" src={imgs1} alt="" />
          <p className="text-white text-center">RELIABLE <br /><span className="font-bold">RESOURCES</span> </p>
          </div>
        </div>

        <div className="bg-[#083971] lg:w-[300px] lg:h-[388px]">
          <div className="mt-[110px]">
          <img className="w-[120px] h-[120px] mx-auto" src={imgs2} alt="" />
          <p className="text-white text-center">RELIABLE <br /><span className="font-bold">OUTCOMES</span> </p>
          </div>
        </div>

        <div className="bg-[#083971] lg:w-[300px] lg:h-[388px]">
          <div className="mt-[110px]">
          <img className="w-[120px] h-[120px] mx-auto" src={imgs3} alt="" />
          <p className="text-white text-center">RELIABLE <br /><span className="font-bold">INSIGHTS</span> </p>
          </div>
        </div>

        <div className="bg-[#083971] lg:w-[300px] lg:h-[388px]">
          <div className="mt-[110px]">
          <img className="w-[120px] h-[120px] mx-auto" src={imgs4} alt="" />
          <p className="text-white text-center">RELIABLE <br /><span className="font-bold">FOR PEOPLE</span> </p>
          </div>
        </div>

      </div>
    </div>

    {/* Blog */}
    <div className="mt-[240px]">
      <div className="text-center font-bold">
        <h5 className="text-[#0057B8] text-[30px]">Career Opportunity</h5>
        <h2 className="text-[55px]">Our Estates</h2>
      </div>



      <div className="lg:flex gap-5 ml-[170px] mb-5">

<div className="card card-compact bg-base-100 w-96 rounded-none">
  <figure>
    <img className="lg:w-[478] lg:h-[282]"
      src={blog3}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-[#083971]">Warehouses</h2>
    <p>As a growing company, we offer exciting and rewarding opportunities - in a safe work environment. On the Gaylor team, you will have our continuous support to reach your professional and personal goals. You will participate in world-class training and have access to innovative industry technologies. Whether you are new to the craft, or an experienced professional, we will help you turn your passion into a career.</p>
  </div>
</div>
<div className="card card-compact bg-base-100 w-96 rounded-none">
  <figure>
    <img className="lg:w-[478] lg:h-[282]"
      src={blog1}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-[#083971]">Factories </h2>
    <p>With work ranging from small, fast-paced builds, to multi-million-dollar, multi-year projects, Gaylor Electric is committed to providing a concise construction workflow from beginning to end. Equipped with decades of multi-industry experience, our team offers unique insight and proven project innovations that have resulted in profitable business relationships, and continued client loyalty..</p>
  </div>
</div>
<div className="card card-compact bg-base-100 w-96 rounded-none">
  <figure>
    <img className="lg:w-[478] lg:h-[282]"
      src={blog2}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-[#083971]">Production</h2>
    <p>At Gaylor Electric, we credit our success to the commitment and abilities of our outstanding team. Our values, coupled with our incredibly talented employees has created a strong culture with an exciting future. With an expanding national footprint, Gaylor Electric is looking for inspired individuals to join the team and grow with the company.</p>
  </div>
</div>
      </div>
    </div>


    {/* Testimonial */}
    <div className="lg:flex gap-20 mt-10 mb-10">
      <div className="w-1/3 ml-[160px]">
        <h5 className="text-[#0057B8] text-[30px] font-bold">Testimonials</h5>
        <h2 className="text-[40px] font-bold">What People Say About Us</h2>
        <p>As a growing company, we offer exciting and rewarding opportunities - in a safe work environment. On the Gaylor team, you will have our continuous support to reach your professional and personal goals. You will participate in world-class training and have access to innovative industry technologies. Whether you are new to the craft, or an experienced professional, we will help you turn your passion into a career.</p>
        <button className="bg-[#0057B8] lg:absolute text-white p-3 rounded-lg mt-3">Contact Us</button>
      </div>

      <div className="flex gap-3">
        <div className="lg:w-[300px] lg:h-[450px] bg-[#083971] rounded-lg text-center p-5 text-white">
          <img className="mx-auto lg:relative bottom-16" src={profile1} alt="" />
          <h4 className="font-bold lg:-mt-10">Roger Rights</h4>

          <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2"className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
<p className="text-left text-[35px]">“</p>
<p>As a growing company, we offer exciting industry technologies. Whether you are new to the craft, or an experienced professional, we will help you turn your passion into a career.</p>
        </div>
        <div className="lg:w-[300px] lg:h-[450px] bg-[#083971] rounded-lg text-center p-5 text-white">
          <img className="mx-auto lg:relative bottom-16" src={profile2} alt="" />
          <h4 className="font-bold lg:-mt-10">Thomas Milner</h4>

          <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2"className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
<p className="text-left text-[35px]">“</p>
<p>As a growing company, we offer exciting industry technologies. Whether you are new to the craft, or an experienced professional, we will help you turn your passion into a career.</p>
        </div>


      </div>

    </div>


    </div>

  );
};

export default Home;
