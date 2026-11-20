import React from "react";
import { ArrowUpRight } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "../../common/ScrollStack/ScrollStack";
import CircularText from "../../common/CircularText/CircularText";
import { themeConfig } from "../../../config/themeConfig";

import img1 from "../../../assets/bg-images/about-sections.png";
import img2 from "../../../assets/bg-images/about-sections2.png";
import img3 from "../../../assets/bg-images/about-sections3.png";
import img4 from "../../../assets/bg-images/about-sections.png";

const AMENITY_IMAGES = [img1, img2, img3, img4];

export default function AmenitiesSection() {
  const { amenities, fonts, colors } = themeConfig;

  return (
    <section
      id="amenities"
      className="relative w-full pb-24 sm:pb-36 selection:bg-white selection:text-[#141212]"
      style={{ backgroundColor: colors.primaryBg }}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-28 items-start">
<div className="w-full lg:w-4/12 lg:sticky lg:top-0 lg:h-screen self-start flex flex-col justify-center items-start text-left z-20 py-8 shrink-0">
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-white/40" />
            <span
              className="text-[11px] sm:text-[13px] tracking-[0.35em] text-white/90 uppercase font-medium"
              style={{ fontFamily: fonts.subHeading }}
            >
              {amenities.badge}
            </span>
            <span className="w-8 h-[1px] bg-white/40" />
          </div>

          <h2
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-white font-normal uppercase leading-[1.02] tracking-[0.04em]"
            style={{ fontFamily: fonts.heading }}
          >
            AMENITIES
          </h2>
<div className="mt-10 sm:mt-12 flex items-center">
            <a
              href="#enquire"
              aria-label="Enquire Now"
              className="group/circle relative inline-flex items-center justify-center cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
            >
              <CircularText
                text="ENQUIRE NOW • RIHA PALACE • "
                spinDuration={16}
                onHover="speedUp"
                size={135}
                fontSize={11}
                fontWeight={500}
                color="#FFFFFF"
                draggable={true}
                hoverTilt={15}
                className="select-none"
              >
<div className="relative w-12 h-12 rounded-full border border-white/80 group-hover/circle:border-white bg-transparent overflow-hidden flex items-center justify-center transition-all duration-300 pointer-events-auto shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover/circle:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
<span
                    aria-hidden="true"
                    className="absolute inset-0 bg-white translate-y-full group-hover/circle:translate-y-0 transition-transform duration-300 ease-out"
                  />
<span className="relative z-10 block overflow-hidden w-5 h-5">
                    <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-300 ease-out group-hover/circle:-translate-y-full" />
                    <ArrowUpRight
                      aria-hidden="true"
                      className="absolute inset-0 w-5 h-5 text-[#141212] transition-transform duration-300 ease-out translate-y-full group-hover/circle:translate-y-0"
                    />
                  </span>
                </div>
              </CircularText>
            </a>
          </div>
        </div>
<div className="w-full lg:w-8/12 lg:pl-6 xl:pl-10 pt-12 sm:pt-20 lg:pt-28">
          <ScrollStack
            useWindowScroll={true}
            itemDistance={140}
            itemStackDistance={24}
            stackPosition="18%"
            itemScale={0.045}
            baseScale={0.88}
            dimAmount={0.25}
            blurAmount={1}
            holdDistance={180}
          >
            {amenities.items.map((item, index) => (
              <ScrollStackItem
                key={item.id}
                itemClassName="relative w-full h-[300px] sm:h-[350px] md:h-[380px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group"
              >
<img
                  src={AMENITY_IMAGES[index]}
                  alt={item.title}
                  draggable={false}
                  className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
                />
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />
<div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 flex flex-col items-start text-left">
                  <h3
                    className="text-2xl sm:text-3xl text-white font-normal uppercase tracking-[0.03em] drop-shadow-md leading-tight"
                    style={{ fontFamily: fonts.heading }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-2 text-xs sm:text-[13px] text-[#E9E9E9]/90 leading-relaxed font-normal line-clamp-2 drop-shadow max-w-xl"
                    style={{ fontFamily: fonts.body }}
                  >
                    {item.description}
                  </p>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
