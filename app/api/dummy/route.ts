import { NextRequest } from "next/server";

export async function GET(_req: NextRequest, _params: any) {
  const data = [
    { id: 1, name: "test" },
    { id: 2, name: "test2" },
    { id: 3, name: "test3" },
  ];
  return new Response(JSON.stringify(data));
}
