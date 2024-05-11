// components/WobbleCardDemo.tsx
"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./Wobble-Card";

export function OurServices() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-[-2rem] pt-2">
            <div className="col-span-1 lg:col-span-2 h-full bg-gradient-to-t from-cream to-transparent min-h-[500px] lg:min-h-[300px]">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-cream min-h-[500px] lg:min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-gray-800">
                        Premium Dog Grooming Services
                    </h2>
                    <p className="mt-4 text-left text-base/6 text-gray-600">
                        We offer luxurious grooming experiences for your pet using high-quality products and experienced professionals.
                    </p>
                </div>
                <Image
                    src="/dog-grooming-session.webp"
                    width={500}
                    height={500}
                    alt="Dog grooming session"
                    className="absolute -right-4 lg:-right-[40%] -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
</div>
            <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-beige">
                <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-gray-800">
                    Comprehensive Care
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-gray-600">
                    From nail trimming to ear cleaning, every detail is handled with care to ensure your pet's health and comfort.
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blush min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-gray-800">
                        Join Our Happy Pet Club
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left text-base/6 text-gray-600">
                        Sign up today and receive regular updates and exclusive offers for your furry friends.
                    </p>
                </div>
                <Image
                    src="/happy-dog.webp"
                    width={500}
                    height={500}
                    alt="Happy dog"
                    className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
        </div>
    );
}
