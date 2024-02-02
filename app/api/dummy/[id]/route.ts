import { NextRequest } from "next/server";

export async function GET(_req: NextRequest, params: any) {
  const id = params.id;
  const data = [
    { id: 1, name: "test" },
    { id: 2, name: "test2" },
    { id: 3, name: "test3" },
  ];
  return new Response(JSON.stringify(data.find((d) => d.id == id)));
}
