import { smallSphere, stars } from "../assets";
import { Heading, PricingList, Section } from "../components";
import { LeftLine, RightLine } from "./design/Pricing";
const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="relative justify-center hidden lg:flex mb-[6.5rem]">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              className="w-full"
              width={950}
              height={400}
              src={stars}
              alt="stars"
            />
          </div>
        </div>
        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
          <a className="text-xs font-bold tracking-wider uppercase border-b font-code" href="/pricing">
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
