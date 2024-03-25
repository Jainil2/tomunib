import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers :[
    CredentialsProvider({
      name : "credentials",
      credentials: {},
      async authorize(credentials) {
        const {email, password} = credentials;
        try {
          await connectMongoDB();
          const user = await User.findOne({email});
          if(!user) {
            return null;
          }
          
          const passwordMatch = await bcrypt.compare(password,user.password);
          if(!passwordMatch) {
            return null;
          }
          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })  
  ],
  // adapter: MongoDBAdapter({
  //   db: await connectMongoDB(),
  // }),
  callbacks :{
    async signIn({user, account, profile}) {
      if(account.provider === "google") {
        const {name , email} = user;
        try {
            await connectMongoDB();
            const userExists = await User.findOne({email});
            if(userExists) {
              return user;
            }
            if(!userExists) {
              console.log("newuser");
              const res = await fetch("http://localhost:3000/api/user", {
                method:"POST",
                headers:{
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({name, email}),
              });
              if(res.ok) {
                return user;
              }
            }
        } catch (error) {
          console.log(error);
        }
      }
      return user;
    },
    // async session({ session, user }) {
    //   if (session.provider === 'credentials') {
    //     user.image = await getUserImage(user.email);
    //   }
    //   return { session, user };
    // },
  },
  secret : process.env.NEXTAUTH_SECRET,
    pages : {
      signIn: "/",
    }
})

export { handler as GET, handler as POST }