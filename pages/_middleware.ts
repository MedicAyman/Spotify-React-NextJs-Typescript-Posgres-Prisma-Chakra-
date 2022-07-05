import { NextResponse } from "next/server";

const signedInpages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedInpages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
