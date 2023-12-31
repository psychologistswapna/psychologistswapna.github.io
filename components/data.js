import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  CogIcon,
  UsersIcon,
  BarsArrowDownIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Some of my counselling sessions",
  desc: "I have blogged about some of my counselling sessions keeping identity of my counselee anonymous & after taking prior permission from them.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Resilient Blossom: A Daughter’s Journey Through Depression and the Absence of Dad’s Love",
      desc: "In 2012, I counselled one of my college juniors which eventually made her question her father & eventually sorted the relationship",
      icon: <UsersIcon />,
      link: "https://medium.com/@drswapnadumavat/a-daughter-whos-emotions-were-misunderstood-91586b865dcc",
    },
    {
      title: "Responsible non-romantic Relationship",
      desc: "A wife & a Husband.....which has to be long-lasting romantic relationship, struck as friendship, compromising & experiencing it as ,there is no way out.",
      icon: <ChatBubbleLeftRightIcon />,
      link: "https://medium.com/@drswapnadumavat/responsible-non-romantic-relationship-243d01713e79",
    },
    {
      title: "Infinite desires- finite probabilities",
      desc: "With uncontrollable hormonal dance in a human body.......defining destiny in search of a soulmate is nothing but finding a pearl deep down in the ocean. ",
      icon: <BarsArrowDownIcon />,
      link: "https://medium.com/@drswapnadumavat/responsible-non-romantic-relationship-243d01713e79",
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
