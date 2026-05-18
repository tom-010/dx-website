import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("methode", "routes/methode.tsx"),
  route("wer-passt", "routes/wer-passt.tsx"),
  route("transparenz", "routes/transparenz.tsx"),
  route("ueber-uns", "routes/ueber-uns.tsx"),
  route("faq", "routes/faq.tsx"),
  route("bewerbung", "routes/bewerbung.tsx"),
  route("impressum", "routes/impressum.tsx"),
  route("datenschutz", "routes/datenschutz.tsx"),
  route("agb", "routes/agb.tsx"),
] satisfies RouteConfig;
