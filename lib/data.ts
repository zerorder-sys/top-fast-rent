import { ASSETS } from "./assets";
import { SITE_CONFIG } from "@/config/site";
import VEHICLE_CONFIG from "@/config/vehicles.json";

export const BRAND = SITE_CONFIG;

export type ServiceIconId =
  | "night-parties"
  | "weddings"
  | "casinos"
  | "birthdays"
  | "airport-transfers"
  | "taxi-service"
  | "daily-rentals";

export type ServiceItem = {
  id: ServiceIconId;
  title: string;
  teaser: string;
  description: string;
};

export const SERVICES_INTRO =
  "At Top Fast Rent a Car, we offer a range of premium car rental services to meet your diverse travel needs.";

export const SERVICES: ServiceItem[] = [
  {
    id: "night-parties",
    title: "Night Parties",
    teaser: "Planning a night out or party with friends?",
    description:
      "Planning a night out or party with friends? We've got you covered. Choose from our range of stylish vehicles or Classic Cars to ensure you travel in comfort and safety. Our chauffeurs provide professional service to make your night out even more special.",
  },
  {
    id: "weddings",
    title: "Weddings",
    teaser: "Make your big day even more memorable with our wedding car rental services.",
    description:
      "Make your big day even more memorable with our wedding car rental services. Our elegant Classic Cars and luxury cars are the perfect choice for wedding transportation, ensuring you arrive at your venue in grand style. We also offer chauffeur services to provide you with a stress-free experience.",
  },
  {
    id: "daily-rentals",
    title: "Daily and Long-Term Rentals",
    teaser: "We offer a wide selection of cars for daily or long-term rentals.",
    description:
      "We offer a wide selection of cars for daily or long-term rentals, including Toyota Fortuner, Mahindra XUV 700 AX 5 S, and Maruti Suzuki Ertiga. Whether it's for a day, a week, or more, we have flexible packages to suit your needs.",
  },
  {
    id: "birthdays",
    title: "Birthdays",
    teaser: "Celebrate your special day in style with our exclusive birthday party car rental services.",
    description:
      "Celebrate your special day in style with our exclusive birthday party car rental services. Choose from our fleet of luxury vehicles and Classic Cars to make your birthday celebration even more memorable. Whether you're planning a night out or a grand celebration, we ensure you travel in comfort and luxury.",
  },
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    teaser: "Get to the airport or your destination in comfort and on time.",
    description:
      "Get to the airport or your destination in comfort and on time with our efficient airport transfer service. We cater to both business and leisure travelers, ensuring a smooth ride.",
  },
  {
    id: "taxi-service",
    title: "Taxi Service",
    teaser: "Ride in comfort and style with our reliable taxi service.",
    description:
      "Ride in comfort and style with our reliable taxi service. Whether you're commuting for work, heading out for leisure, or running errands, we ensure a safe and timely journey tailored to your needs. Trust us for a seamless travel experience every time.",
  },
  {
    id: "casinos",
    title: "Casinos",
    teaser: "Arrive in style for your casino night with premium chauffeur-driven rides.",
    description:
      "Rent For Casinos — travel to and from your destination in luxury and comfort. Choose from our Classic Cars and premium fleet with professional chauffeurs for a refined evening experience in Kochi.",
  },
];

export type TierAVehicle = {
  name: string;
  image: string;
  category: string;
  rates: { label: string; value: string }[];
};

export const TIER_A_FLEET: TierAVehicle[] = VEHICLE_CONFIG.tierA.vehicles.map(
  (v: any) => ({
    name: v.name,
    image: ASSETS.fleet[v.assetKey as keyof typeof ASSETS.fleet],
    category: v.category,
    rates: v.rates,
  })
);

export const OTHER_FLEET = VEHICLE_CONFIG.otherFleet;

export type TierBVehicle = {
  name: string;
  image: string;
  packageKm: number;
  packagePrice: string;
  extraKmRate: string;
};

export const TIER_B_FLEET: TierBVehicle[] = VEHICLE_CONFIG.tierB.vehicles.map(
  (v: any) => ({
    name: v.name,
    image: ASSETS.fleet[v.assetKey as keyof typeof ASSETS.fleet],
    packageKm: v.packageKm,
    packagePrice: v.packagePrice,
    extraKmRate: v.extraKmRate,
  })
);
