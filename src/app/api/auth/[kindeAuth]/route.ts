import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
//import { NextRequest } from "next/server";
export const GET = handleAuth();
// export async function GET(
//   request: NextRequest,
//   { params }: { params: { kindAuth: string } }
// ) {
//   const endpoint: string = params.kindAuth;
//   return handleAuth(request, params.kindAuth);
// }
