import {ArrowRight} from "lucide-react";
import aboutImage1 from "../assets/aboutImage1.png";
import aboutImage2 from "../assets/aboutImage2.png";

const AboutBitcoin = () => {
  return (
    <>
      <div className="bg-white rounded-lg p-6 mt-5">
        <h2 className="text-2xl font-semibold mb-6">About Bitcoin</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">What is Bitcoin?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed">
              Bitcoin's price today is US$16,551.82, with a 24-hour trading
              volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
              currently -7.70% from its 7-day all-time high of $16,874.12, and
              3.40% from its 7-day all-time low of $16,394.75. BTC has a
              circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
            </p>
          </div>
          <hr />
          <div className="space-y-4">
            <h3 className="font-semibold mb-2">Lorem ipsum dolor sit amet</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
              lobortis tristique pharetra. Diam id et lectus urna et tellus
              aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Diam praesent massa dapibus magna aliquam a dictumst volutpat.
              Egestas vitae pellentesque auctor amet. Nunc sagittis libero
              adipiscing cursus felis pellentesque interdum. Odio cursus
              phasellus velit in senectus enim dui. Turpis tristique placerat
              interdum sed volutpat. Id imperdiet magna eget eros donec cursus
              nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
              Integer dignissim augue viverra nulla et quis lobortis phasellus.
              Integer pellentesque enim convallis ultricies at.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
              massa vel convallis duis ac. Mi adipiscing semper scelerisque
              porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
              congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
              eget. Ullamcorper dui
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Already Holding Bitcoin?</h3>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Calculate Profits Card */}
              <div className="bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD] p-4 rounded-lg text-white">
                <div className="flex items-center gap-x-12">
                  <div className="mt-2">
                    <img
                      src={aboutImage1}
                      alt="Profits icon"
                      className="rounded"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-2xl">
                      Calculate your <br /> Profits
                    </h4>
                    <button className="flex mt-5 items-center gap-2 bg-white text-black px-3 py-1.5 rounded text-sm">
                      Check Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                {/* <div className="flex justify-between items-start mb-20">
                  <div>
                    <h4 className="font-medium mb-1">Calculate your Profits</h4>
                  </div>
                  <img
                    src={aboutImage1}
                    alt="Profits icon"
                    width={40}
                    height={40}
                    className="rounded"
                  />
                </div>
                <button className="flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded text-sm">
                  Check Now
                  <ArrowRight className="w-4 h-4" />
                </button> */}
              </div>

              {/* Calculate Tax Card */}
              <div className="bg-gradient-to-r from-[#FF9865] to-[#EF3031] p-4 rounded-lg text-white">
                <div className="flex items-center gap-x-12">
                  <div className="mt-2">
                    <img
                      src={aboutImage2}
                      alt="Profits icon"
                      className="rounded"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-2xl">
                      Calculate your tax <br /> liability
                    </h4>
                    <button className="flex mt-5 items-center gap-2 bg-white text-black px-3 py-1.5 rounded text-sm">
                      Check Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <hr />
              <p className="text-gray-600 text-sm mt-6 leading-relaxed">
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit
                aliquam massa vel convallis duis ac. Mi adipiscing semper
                scelerisque porttitor pulvinar nunc risus. Fermentum potenti
                iaculis lacinia congue ipsum fames amet dui. Purus ultrices
                tincidunt volutpat in eget. Ullamcorper dui
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBitcoin;
