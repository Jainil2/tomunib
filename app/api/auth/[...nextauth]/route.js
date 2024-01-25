// import NextAuth from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
// import User from '@models/user';
// import { connectToDB } from '@utils/database';

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     })
//   ],
//   callbacks: {
//     async session({ session }) {
//       // store the user id from MongoDB to session
//       const sessionUser = await User.findOne({ email: session.user.email });
//       session.user.id = sessionUser._id.toString();

//       return session;
//     },
//     async signIn({ account, profile, user, credentials }) {
//       try {
//         await connectToDB();

//         // check if user already exists
//         const userExists = await User.findOne({ email: profile.email });

//         // if not, create a new document and save user in MongoDB
//         if (!userExists) {
//           await User.create({
//             email: profile.email,
//             username: profile.name.replace(" ", "").toLowerCase(),
//             image: profile.picture,
//           });
//         }

//         return true
//       } catch (error) {
//         console.log("Error checking if user exists: ", error.message);
//         return false
//       }
//     },
//   }
// })

// export { handler as GET, handler as POST }
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
      console.log(profile);
      if(account.provider === "google") {
        const {name , email} = user;
        // console.log(name);
        // console.log(email);
        try {
            await connectMongoDB();
            const userExists = await User.findOne({email});
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
  //   async session({ session, user }) {
  //     // Add extra user data to session based on provider
  //     if (session.provider === 'credentials') {
  //       // Fetch additional user data based on email or ID from your model
  //       user.image = await getUserImage(user.email);
  //     }
  //     return { session, user };
  //   },
  },
  secret : process.env.NEXTAUTH_SECRET,
    pages : {
      signIn: "/",
    }
})

export { handler as GET, handler as POST }