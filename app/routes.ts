import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), // default route "/"
    route("/auth", "routes/auth.tsx"),
    route("/upload", "routes/upload.tsx"),
] satisfies RouteConfig;
