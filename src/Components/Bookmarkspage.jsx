import { useState } from "react";
import hero from "../assets/images/illustration-hero.svg";
import bookmark from "../assets/images/logo-bookmark.svg";
import tab1 from "../assets/images/illustration-features-tab-1.svg";
import tab2 from "../assets/images/illustration-features-tab-2.svg";
import tab3 from "../assets/images/illustration-features-tab-3.svg";
import firefox from "../assets/images/logo-firefox.svg";
import chrome from "../assets/images/logo-chrome.svg";
import opera from "../assets/images/logo-opera.svg";
import dot from "../assets/images/bg-dots.svg";
import arrowup from "../assets/images/icon-error.svg";
import arrowdwn from "../assets/images/icon-arrow.svg";
import fb from "../assets/images/icon-facebook.svg";
import twit from "../assets/images/icon-twitter.svg";
import PropTypes from "prop-types";

export default function Bookmark({ email, onChangeEmail, onSubmitDetails }) {
  const [isBookmark, setBookmark] = useState(false);
  const [isBrowser, setBrowser] = useState(false);
  const [isApp, setApp] = useState(false);
  const [isChromium, setChromium] = useState(false);

  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};

    if (!email) newError.email = `Whoops, make sure it's an email`;

    setError(newError);

    if (Object.keys(newError).length === 0) {
      onSubmitDetails();
    }
  };

  return (
    <div className="font-body">
      <header className="px-32 py-9 flex justify-between items-center">
        <div>
          <img className="w-20" src={bookmark} alt="Bookmark Logo" />
        </div>

        <nav>
          <ul className="flex items-center space-x-5">
            <li>
              <button className="list">Features</button>
            </li>
            <li>
              <button className="list">Pricing</button>
            </li>
            <li>
              <button className="list">Contact</button>
            </li>
            <li>
              <button className="button text-neutral-50 text-sm bg-primary-softred py-2 px-6 rounded-md shadow-md uppercase">
                login
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="pb-32">
        <section className="flex justify-between items-center gap-56 pl-32 pt-24">
          <div className="-mt-32 space-y-2">
            <h2 className="text-neutral-vdarkblue text-4xl font-semibold ">
              A Simple Bookmark Manager
            </h2>
            <p className="text-neutral-grayishblue text-lg font-medium">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="flex gap-5">
              <button className="add bg-primary-softblue py-2 px-3 text-neutral-50 text-sm font-medium shadow-md rounded-sm">
                Get it on Chrome
              </button>
              <button className="add bg-neutral-100 text-neutral-vdarkblue py-2 px-3 text-sm font-medium shadow-md rounded-sm">
                Get it on Firefox
              </button>
            </div>
          </div>

          <div className="bg-primary-softblue rounded-bl-full ">
            <div className="pr-16 -mt-20 -ml-20">
              <img src={hero} alt="" />
            </div>
          </div>
        </section>

        <section className="pt-20">
          <div className="text-center px-72 space-y-2">
            <h2 className="text-neutral-vdarkblue font-bold text-3xl">
              Features
            </h2>
            <p className="text-neutral-grayishblue text-lg font-light">
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks synx between your devices so
              you can access them on the go.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center px-64 pt-10">
              <button className="btn">Simple Bookmarking</button>
              <button className="btn">Speedy searching</button>
              <button className="btn">Easy Sharing</button>
            </div>

            <div className="flex justify-between items-center pr-32 gap-56 pt-36">
              <div className="bg-primary-softblue rounded-br-full pb-12 ">
                <div className="pl-16 -mt-16 -mr-10">
                  <img src={tab1} alt="" />
                </div>
              </div>

              <div className="space-y-4 -mt-32">
                <h2 className="text-neutral-vdarkblue font-bold text-3xl">
                  Bookmark in one click
                </h2>
                <p className="text-neutral-grayishblue text-lg font-light">
                  Organize your bookmarks however you like. our simple
                  drag-and-drop interfac gives you complete control over how you
                  manage your favorite sites.
                </p>
                <button className="bg-primary-softblue py-2 px-3 text-neutral-50 text-sm font-medium shadow-md rounded-sm">
                  More Info
                </button>
              </div>
            </div>

            <div className="hidden flex justify-between items-center pr-32 gap-56 pt-36">
              <div className="bg-primary-softblue rounded-br-full pb-12 ">
                <div className="pl-16 -mt-16 -mr-10">
                  <img src={tab2} alt="" />
                </div>
              </div>

              <div className="space-y-4 -mt-32">
                <h2 className="text-neutral-vdarkblue font-bold text-3xl">
                  Intelligent search
                </h2>
                <p className="text-neutral-grayishblue text-lg font-light">
                  Our powerful search feature will help you find saved 
                  sites in no time at all. No need to trawl through all of 
                  your bookmarks.
                </p>
                <button className="bg-primary-softblue py-2 px-3 text-neutral-50 text-sm font-medium shadow-md rounded-sm">
                  More Info
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center pr-32 gap-56 pt-36">
              <div className="bg-primary-softblue rounded-br-full pb-12 ">
                <div className="pl-16 -mt-16 -mr-10">
                  <img src={tab3} alt="" />
                </div>
              </div>

              <div className="space-y-4 -mt-32">
                <h2 className="text-neutral-vdarkblue font-bold text-3xl">
                  Share your bookmarks
                </h2>
                <p className="text-neutral-grayishblue text-lg font-light">
                 Easily share your bookmarks and collections with 
                 others. Create a shareable link, that you can send at 
                 the click of a button.
                </p>
                <button className="bg-primary-softblue py-2 px-3 text-neutral-50 text-sm font-medium shadow-md rounded-sm">
                  More Info
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20">
          <div className="flex flex-col justify-center items-center text-center px-72 space-y-3">
            <h2 className="text-neutral-vdarkblue font-bold text-3xl">
              Download the extension
            </h2>
            <p className="text-neutral-grayishblue text-lg font-light">
              We&apos;ve got more browser in the pipeline. Please do let us know
              if you&apos;ve got a fovourite you&apos;d like us to prioritize.
            </p>
          </div>

          <div className="px-60 flex justify-between items-center gap-5">
            <div className="bg-white shadow-lg flex flex-col justify-center items-center rounded-lg">
              <div className="flex flex-col justify-center items-center text-center pt-10 pb-8 px-12 ">
                <div>
                  <img className="w-24" src={chrome} alt="Chrome Icon" />
                </div>

                <div className="pt-4 space-y-1">
                  <h4 className="brow">Add to Chrome</h4>
                  <p className="brow-de">Minimum version 62</p>
                </div>
              </div>

              <div>
                <img src={dot} alt="Dot Svg" />
              </div>

              <div className="">
                <button className="bg-primary-softblue py-3 px-10 text-neutral-50 text-base text-nowrap font-medium shadow-md rounded-md my-6 mx-5 add">
                  Add & Install Extension
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg flex flex-col justify-center items-center rounded-lg mt-16">
              <div className="flex flex-col justify-center items-center text-center pt-10 pb-8 px-12 ">
                <div>
                  <img className="w-24" src={firefox} alt="Chrome Icon" />
                </div>

                <div className="pt-4 space-y-1">
                  <h4 className="brow">Add to Firefox</h4>
                  <p className="brow-de">Minimum version 55</p>
                </div>
              </div>

              <div>
                <img src={dot} alt="Dot Svg" />
              </div>

              <div className="">
                <button className="bg-primary-softblue py-3 px-10 text-neutral-50 text-base text-nowrap font-medium shadow-md rounded-md my-6 mx-5 add">
                  Add & Install Extension
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg flex flex-col justify-center items-center rounded-lg mt-24">
              <div className="flex flex-col justify-center items-center text-center pt-10 pb-8 px-12 ">
                <div>
                  <img className="w-24" src={opera} alt="Chrome Icon" />
                </div>

                <div className="pt-4 space-y-1">
                  <h4 className="brow">Add to Opera</h4>
                  <p className="brow-de">Minimum version 46</p>
                </div>
              </div>

              <div>
                <img src={dot} alt="Dot Svg" />
              </div>

              <div className="">
                <button className="bg-primary-softblue py-3 px-10 text-neutral-50 text-base text-nowrap font-medium shadow-md rounded-md my-6 mx-5 add">
                  Add & Install Extension
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-24">
          <div className="flex flex-col justify-center items-center text-center px-72 space-y-3">
            <div>
              <h2 className="text-neutral-vdarkblue font-bold text-3xl">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-grayishblue text-lg font-light">
                Here are some of our FAQs. If you have any other questions
                you&apos;d like answered please fell free to email us.
              </p>
            </div>

            <div className="w-full space-y-5">
              <div className="flex flex-col items-start border-y-neutral-grayishblue border-y-2 py-5 px-4">
                <div className="flex justify-between items-center pb-3 w-full">
                  <p className="text-neutral-vdarkblue text-lg font-bold hover:text-primary-softred">
                    What is Bookmark?
                  </p>
                  <button onClick={() => setBookmark(!isBookmark)}>
                    <img src={isBookmark ? arrowup : arrowdwn} alt="" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-start border-b-neutral-grayishblue border-b-2 pb-5 px-4">
                <div className="flex justify-between items-center pb-3 w-full">
                  <p className="text-neutral-vdarkblue text-lg font-bold hover:text-primary-softred">
                    How can i request a new browser?
                  </p>
                  <button onClick={() => setBrowser(!isBrowser)}>
                    <img src={isBrowser ? arrowup : arrowdwn} alt="" />
                  </button>
                </div>
                {isBrowser && (
                  <p className="text-neutral-grayishblue text-base font-medium text-start">
                    Vivamus luctus eros allquet convallis ultricies. Mauris
                    augue massa. ultricies non ligula. Suspendisse imperdiet.
                    Vivamus luctus eros aliquet convalis ultricies. Mauris augue
                    massa, ultricies non ligula. Suspendisse imperdie tVivamus
                    luctus eros aliquet convalis ultricies. Mauris augue massa,
                    ultricies non ligula. Suspendisse imperdiet.
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start border-b-neutral-grayishblue border-b-2 pb-5 px-4">
                <div className="flex justify-between items-center pb-3 w-full">
                  <p className="text-neutral-vdarkblue text-lg font-bold hover:text-primary-softred">
                    Is there a mobile App?
                  </p>
                  <button onClick={() => setApp(!isApp)}>
                    <img src={isApp ? arrowup : arrowdwn} alt="" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-start border-b-neutral-grayishblue border-b-2 pb-5 px-4">
                <div className="flex justify-between items-center pb-3 w-full">
                  <p className="text-neutral-vdarkblue text-lg font-bold hover:text-primary-softred">
                    What about other Chromium Browsers?
                  </p>
                  <button onClick={() => setChromium(!isChromium)}>
                    <img src={isChromium ? arrowup : arrowdwn} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className="">
              <button className="bg-primary-softblue py-2 px-4 text-center text-neutral-50 text-sm font-medium shadow-md rounded-sm mt-8">
                More Info
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className=" bg-primary-softblue flex flex-col justify-center items-center text-center py-14 space-y-6">
          <div className="space-y-5">
            <h2 className="text-neutral-50 uppercase text-xl font-medium">
              35,000+ Already joined
            </h2>
            <p className="text-neutral-50 text-5xl ">
              Stay up-to-date with what we&apos;re doing
            </p>
          </div>
          <div>
            <form action="" onSubmit={handleSubmit}>
              <div className="flex gap-4 items-start">
                <div className="bg-primary-softred rounded-md pt-1 px-1">
                  <div className="rounded-md py-3 px-3 focus:border-0 focus:outline-none bg-white text-primary-softblue flex justify-between items-center ">
                    <input
                      className="w-full focus:outline-none pr-20 placeholder:text-neutral-grayishblue text-base font-light "
                      type="email"
                      value={email}
                      onChange={onChangeEmail} placeholder="Enter your email address"
                    />
                    <img src={error ? arrowdwn : arrowup} alt="" />
                  </div>
                  {error.email && (
                    <p className="text-neutral-50 text-sm text-start px-3 font-light py-2">
                      {error.email}
                    </p>
                  )}
                </div>
                <button 
                  type="submit"
                  className="py-3 px-6 text-neutral-50 text-lg font-bold rounded-md bg-primary-softred shadow-md button"
                >
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-neutral-vdarkblue py-6 px-32 flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <div>
              <img className="w-20" src={bookmark} alt="Bookmark Logo" />
            </div>

            <nav>
              <ul className="flex items-center space-x-4">
                <li className="foot-list">
                  <a href="">Features</a>
                </li>
                <li className="foot-list">
                  <a href="">Pricing</a>
                </li>
                <li className="foot-list">
                  <a href="">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex gap-5 items-center">
            <div>
              <img className="w-4" src={fb} alt="Facebook Logo" />
            </div>
            <div>
              <img className="w-4" src={twit} alt="Twitter Logo" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

Bookmark.propTypes = {
  email: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onSubmitDetails: PropTypes.func.isRequired,
};
