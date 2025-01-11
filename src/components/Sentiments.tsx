import {ChevronLeft, ChevronRight, FileText, TrendingUp} from "lucide-react";
import {useState} from "react";

const Sentiments = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const keyEvents = [
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-600",
      text: {
        title:
          "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
        description:
          "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
      },
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-600",
      text: {
        title:
          "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
        description:
          "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisine metus quis del",
      },
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-600",
      text: {
        title:
          "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
        description:
          "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
      },
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-600",
      text: {
        title:
          "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
        description:
          "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisine metus quis del",
      },
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % keyEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + keyEvents.length) % keyEvents.length);
  };

  return (
    <div className="bg-white rounded-lg p-6 mt-5">
      <h2 className="text-2xl font-semibold mb-6">Sentiment</h2>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Key Events</h3>
          <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
            <span className="text-gray-400 text-xs">i</span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{transform: `translateX(-${currentSlide * 50}%)`}}
            >
              {keyEvents.map((event, index) => (
                <div key={index} className="min-w-[calc(50%-8px)]">
                  <div className={`${event.bgColor} rounded-xl p-4 h-full`}>
                    <div className="flex gap-4">
                      <div
                        className={`${event.iconBg} bg-opacity-10 rounded-full p-2 h-fit`}
                      >
                        {event.icon}
                      </div>
                      <div>
                        <p className="font-medium mb-2">{event.text.title}</p>
                        <p className="text-gray-600 text-sm">
                          {event.text.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200"
            style={{display: currentSlide === 0 ? "none" : "flex"}}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200"
            style={{
              display: currentSlide === keyEvents.length - 1 ? "none" : "flex",
            }}
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Analyst Estimates
          </h3>
          <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
            <span className="text-gray-400 text-xs">i</span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-emerald-50 flex items-center justify-center">
            <span className="text-4xl font-semibold text-emerald-500">
              76<span className="text-2xl">%</span>
            </span>
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-8">
              <span className="w-8 text-sm text-gray-500">Buy</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div className="h-full w-[76%] bg-emerald-500 rounded-full"></div>
              </div>
              <span className="w-12 text-sm text-gray-500">76%</span>
            </div>
            <div className="flex items-center gap-8">
              <span className="w-8 text-sm text-gray-500">Hold</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div className="h-full w-[8%] bg-gray-400 rounded-full"></div>
              </div>
              <span className="w-12 text-sm text-gray-500">8%</span>
            </div>
            <div className="flex items-center gap-8">
              <span className="w-8 text-sm text-gray-500">Sell</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div className="h-full w-[16%] bg-red-500 rounded-full"></div>
              </div>
              <span className="w-12 text-sm text-gray-500">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiments;
