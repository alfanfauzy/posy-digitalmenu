import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  const { origin } = req.nextUrl

  return NextResponse.redirect(`${origin}/order`)
}

export const config = {
  matcher: ['/'],
}
