const Performance = () => {
  return (
    <>
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Performance</h2>

        <div className="mb-8">
          <div className="flex justify-between text-md mb-1">
            <div>
              <p className="text-gray-500 mb-4">Today's Low</p>
              <p className="font-medium">46,930.22</p>
            </div>
            <div className="flex-1 px-6 relative">
              <div className="h-1.5 mt-6 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"></div>
              <div className="absolute left-[60%] top-8">
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-black"></div>
                <div className="absolute whitespace-nowrap font-medium text-sm text-gray-700 mt-1 left-1/2 transform -translate-x-1/2">
                  $48,637.83
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-500 mb-4">Today's High</p>
              <p className="font-medium">49,343.83</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-md mb-1">
            <div>
              <p className="text-gray-500 mb-4">52W Low</p>
              <p className="font-medium">16,930.22</p>
            </div>
            <div className="flex-1 px-6">
              <div className="h-1.5 mt-6 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"></div>
            </div>
            <div className="text-right">
              <p className="text-gray-500 mb-4">52W High</p>
              <p className="font-medium">49,743.83</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-semibold">Fundamentals</h2>
            <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
              <span className="text-gray-400 text-xs">i</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Bitcoin Price</span>
                <span className="font-medium">$16,815.46</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">24h Low / 24h High</span>
                <span className="font-medium">$16,382.07 / $16,874.12</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">7d Low / 7d High</span>
                <span className="font-medium">$16,382.07 / $16,874.12</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Trading Volume</span>
                <span className="font-medium">$23,249,202,782</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Market Cap Rank</span>
                <span className="font-medium">#1</span>
              </div>
            </div>

            <div className="space-y-4 items-center">
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Market Cap</span>
                <span className="font-medium">$323,507,290,047</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Market Cap Dominance</span>
                <span className="font-medium">38.343%</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Volume / Market Cap</span>
                <span className="font-medium">0.0718</span>
              </div>
              <div className="flex justify-between items-center pb-1 border-b">
                <div className="text-gray-500">All-Time High</div>
                <div className="text-right">
                  <div className="font-medium">
                    $69,044.77 <span className="text-red-500">-75.6%</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Nov 10, 2021 (about 1 year)
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center pb-1 border-b">
                <div className="text-gray-500">All-Time Low</div>
                <div className="text-right">
                  <div className="font-medium">
                    $67.81 <span className="text-green-500">24729.1%</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Jul 06, 2013 (over 9 years)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;
