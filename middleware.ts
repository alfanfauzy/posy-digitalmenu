import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  const { origin } = req.nextUrl

  return NextResponse.redirect(`${origin}/order/1`)
}

export const config = {
  matcher: ['/'],
}
