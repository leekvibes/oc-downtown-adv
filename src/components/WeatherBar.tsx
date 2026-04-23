"use client";

import { useEffect, useState } from "react";

interface WeatherData {
  temp: number;
  feelsLike: number;
  wind: number;
  waterTemp: number | null;
  description: string;
  icon: "sun" | "partly" | "cloudy" | "rain" | "storm";
}

/* Ocean City MD coordinates */
const LAT = 38.3365;
const LON = -75.0849;

/* NOAA Ocean City Inlet station — closest to the bay */
const NOAA_STATION = "8570283";

function weatherIcon(code: number): WeatherData["icon"] {
  if (code <= 1) return "sun";
  if (code <= 3) return "partly";
  if (code <= 48) return "cloudy";
  if (code <= 67) return "rain";
  return "storm";
}

function weatherLabel(code: number): string {
  if (code <= 1) return "Clear skies";
  if (code === 2) return "Partly cloudy";
  if (code === 3) return "Overcast";
  if (code <= 48) return "Cloudy";
  if (code <= 55) return "Light rain";
  if (code <= 67) return "Rainy";
  if (code <= 77) return "Snow";
  if (code <= 82) return "Rain showers";
  return "Stormy";
}

function rideStatus(icon: WeatherData["icon"], wind: number): { text: string; color: string } {
  if (icon === "storm" || wind > 25)
    return { text: "Check conditions before booking", color: "text-yellow-brand" };
  if (icon === "rain" || wind > 18)
    return { text: "Rideable — expect some chop", color: "text-yellow-300" };
  return { text: "Great day to ride!", color: "text-green-400" };
}

const SunIcon = () => (
  <svg className="w-6 h-6 text-yellow-brand" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm11.394-5.834a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
  </svg>
);

const PartlyIcon = () => (
  <svg className="w-6 h-6 text-yellow-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    <circle cx="17" cy="7" r="3" fill="currentColor" />
  </svg>
);

const CloudyIcon = () => (
  <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
  </svg>
);

const RainIcon = () => (
  <svg className="w-6 h-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 19v2m4-2v2m4-2v2" />
  </svg>
);

const IconMap = { sun: SunIcon, partly: PartlyIcon, cloudy: CloudyIcon, rain: RainIcon, storm: RainIcon };

async function fetchWaterTemp(): Promise<number | null> {
  try {
    const res = await fetch(
      `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=latest&station=${NOAA_STATION}&product=water_temperature&units=english&time_zone=lst_ldt&format=json`
    );
    const data = await res.json();
    if (data?.data?.[0]?.v) {
      return Math.round(parseFloat(data.data[0].v));
    }
    return null;
  } catch {
    return null;
  }
}

export function WeatherBar() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const [weatherRes, waterTemp] = await Promise.all([
          fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,apparent_temperature,wind_speed_10m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America%2FNew_York`
          ),
          fetchWaterTemp(),
        ]);
        const data = await weatherRes.json();
        const c = data.current;
        setWeather({
          temp: Math.round(c.temperature_2m),
          feelsLike: Math.round(c.apparent_temperature),
          wind: Math.round(c.wind_speed_10m),
          waterTemp,
          description: weatherLabel(c.weather_code),
          icon: weatherIcon(c.weather_code),
        });
      } catch {
        /* silently fail — bar just won't show */
      }
    }
    fetchWeather();
  }, []);

  if (!weather) return null;

  const Icon = IconMap[weather.icon];
  const status = rideStatus(weather.icon, weather.wind);

  return (
    <section className="bg-blue-dark text-white py-3">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {/* Location + icon */}
          <div className="flex items-center gap-2">
            <Icon />
            <span className="font-semibold">Ocean City, MD</span>
          </div>

          {/* Air Temp */}
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-extrabold">{weather.temp}°F</span>
            <span className="text-white/60 text-xs">Feels {weather.feelsLike}°</span>
          </div>

          {/* Conditions */}
          <div className="text-white/80">{weather.description}</div>

          {/* Water Temp */}
          {weather.waterTemp !== null && (
            <div className="flex items-center gap-1.5 text-white/80">
              <svg className="w-4 h-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
              Water: {weather.waterTemp}°F
            </div>
          )}

          {/* Wind */}
          <div className="flex items-center gap-1.5 text-white/80">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            </svg>
            Wind: {weather.wind} mph
          </div>

          {/* Ride status */}
          <div className={`font-bold ${status.color}`}>
            {status.text}
          </div>
        </div>
      </div>
    </section>
  );
}
