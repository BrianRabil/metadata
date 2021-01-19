import { compareSync, hashSync } from 'bcryptjs'
import { createHash } from 'crypto'
import { Request } from 'express'
import { ExtractJwt } from 'passport-jwt'

const getHash = (str) => createHash('md5').update(str).digest('hex')

const gravatarUrl = 'https://www.gravatar.com/avatar/'
const gravatarSize = 460

export const getGravatarUrl = (email = '') => `${gravatarUrl}${getHash(email)}?s=${gravatarSize}&d=mp`

export function validatePassword(password: string, hashedPassword: string): boolean {
  return compareSync(password, hashedPassword)
}

export function hashPassword(password: string): string {
  return hashSync(password, 10)
}

export function generateMd5Hash(input: string) {
  return createHash('md5').update(input).digest('hex')
}

export function generateToken() {
  return generateMd5Hash(randomId(24))
}

export function generateExpireDate(days = 1) {
  return new Date(Date.now() + 60 * 60 * 24 * 1000 * days)
}

export function randomId(length = 8) {
  return new Date().getTime().toString().substr(0, 8)
}

export function rand(items) {
  return items[Math.floor(Math.random() * items.length)]
}

export function uniqueSuffix(input, length = 5) {
  const suffix = generateMd5Hash(Date.now() + input).slice(0, length)
  return `${input}-${suffix}`
}

export function headerAndCookieExtractor(req: Request) {
  const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req)
  if (!token) {
    return cookieExtractor(req)
  }
  return token
}

export function cookieExtractor(req: Request) {
  const name = process.env.API_COOKIE_NAME || '__session'
  return req?.cookies?.[name] ? req.cookies[name] : undefined
}
