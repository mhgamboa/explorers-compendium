import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { createClient } from "@/utils/supabase/middleware";
import { redirect } from "next/dist/server/api-utils";
import { Console } from "console";

export async function middleware(request: NextRequest) {
  const url = process.env.BASE_URL;

  const { supabase, response } = createClient(request);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    if (request.url === `${url}/login`)
      return NextResponse.redirect(new URL("/", request.url));
    if (request.url === `${url}/signup`)
      return NextResponse.redirect(new URL("/", request.url));
  }

  // return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    // "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    "/login",
    "/signup",
  ],
};
