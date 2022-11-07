import { languages } from "./languages";

/**
 * Some default settings for the SDK
 */
const defaults = {
  // When a Map is instanciated without a 'style', then this one is the default
  mapStyle: "streets-v2",
  maptilerLogoURL: "https://api.maptiler.com/resources/logo.svg",
  maptilerURL: "https://www.maptiler.com/",
  maptilerApiURL: "https://api.maptiler.com/",
  rtlPluginURL:
    "https://cdn.maptiler.com/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.min.js",
  primaryLanguage: languages.LATIN,
  secondaryLanguage: languages.NON_LATIN,
};

Object.freeze(defaults);

export { defaults };
