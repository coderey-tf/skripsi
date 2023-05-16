export { default } from "next-auth/middleware"

export const config = {
  matcher:
    [
      "/dashboard/:path*",
      "/alternatif/:path*",
      "/kriteria/:path*",
      "/universitas/:path*",
      "/hasil/:path*"
    ]
}