import Google from '@auth/core/providers/google'
export default {
  secret: '972c431bb42d1d5b50a26e8358ae0b70be594c044f95a9678666c9f4ee8ac59d',
  providers: [
    // @ts-ignore
    Google({
      clientId: '505450551021-vu1amcbd0ls2gokvssqqh5k1gdq3s55q.apps.googleusercontent.com',
      clientSecret: process.env.GSECRET,
    }),
  ],
  trustHost: true,
}