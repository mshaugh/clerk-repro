import { NextResponse } from "next/server";

import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in"],

  afterAuth: (auth, req) => {
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url }) as never;
    }

    // if (
    //   auth.userId &&
    //   !auth.orgId &&
    //   req.nextUrl.pathname !== "/org-selection"
    // ) {
    //   return NextResponse.redirect(new URL("/org-selection", req.url));
    // }

    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
