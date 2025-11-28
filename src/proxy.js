import { NextResponse } from "next/server";

export default function proxy(request) {
  // NextAuth session cookie check
  const session =
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("__Secure-next-auth.session-token")?.value;

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/items/:path*",         // item list + details protected
    "/manage-products/:path*", 
    "/add-product/:path*",
  ],
};
