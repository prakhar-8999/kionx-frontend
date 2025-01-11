const Tokenomics = () => {
  return (
    <>
      <div className="bg-white rounded-lg p-6 mt-5">
        <h2 className="text-2xl font-semibold mb-6">Tokenomics</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-6">Initial Distribution</h3>

            <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
              <div className="relative w-64 h-64">
                <svg
                  viewBox="0 0 100 100"
                  className="transform -rotate-90 w-full h-full"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#FFA500"
                    strokeWidth="20"
                    strokeDasharray="150.72 251.2"
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#0082FF"
                    strokeWidth="20"
                    strokeDasharray="100.48 251.2"
                    strokeDashoffset="-150.72"
                  />
                </svg>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0082FF]"></div>
                  <span className="text-gray-800">
                    Crowdsale investors: 80%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#F7931A]"></div>
                  <span className="text-gray-800">Foundation: 20%</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
            ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
            bibendum amet enim sit eget leo amet. At metus orci augue fusce
            eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales
            massa habitasse urna felis augue. Gravida aliquam fermentum augue
            eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio
            rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae.
            Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio
            nisi eu ac risus.
          </p>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
