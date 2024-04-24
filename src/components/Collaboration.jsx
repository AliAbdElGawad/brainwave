import { brainwaveSymbol, check } from "../assets";
import { Button, Section } from "../components";
import { collabApps, collabContent, collabText } from "../constants";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="mb-4 h2 md:mb-8">
            AI Chat For Seamless Collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="py-3 mb-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="ml-5 body-2">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="mt-3 body-2 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try It Now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="mb-8 body-2 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <div
            className="relative mt-4 flex left-1/2 w-[22rem] aspect-square border border-n-6 rounded-full
          -translate-x-1/2 scale-75 md:scale-100"
          >
            <div className="flex m-auto border rounded-full w-60 aspect-square border-n-6">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full rounded-full bg-n-8">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((item, index) => (
                <li
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                  key={item.id}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15
                    rounded-xl -rotate-${index * 45}`}
                  >
                    <img
                      className="m-auto"
                      width={item.width}
                      height={item.height}
                      src={item.icon}
                      alt={item.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
