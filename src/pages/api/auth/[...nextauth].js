import NextAuth from 'next-auth'
// import GithubProvider from 'next-auth/providers/github'

const authOptions = {
  session: {},
  jwt: {},
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET
    // })
  ],
  events: {},
  pages: {},
  callbacks: {},
  debug: false
}

const auth = async (req, res) => await NextAuth(req, res, authOptions)

export default auth
