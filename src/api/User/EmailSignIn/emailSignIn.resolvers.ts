import { EmailSignInMutationArgs, EmailSignInResponse } from "src/types/graph";

import { Resolvers } from "src/types/resolver";
import User from "../../../entities/User";

const resolvers: Resolvers = {
  Mutation: {
    EmailSignIn: async (
      _,
      args: EmailSignInMutationArgs
    ): Promise<EmailSignInResponse> => {
      const { email, password } = args;

      // Check if email exists
      try {
        const user = await User.findOne({
          email
        });

        if (!user) {
          return {
            ok: false,
            error: "No User with email",
            token: null
          };
        }

        // Check if password is correcct
        const checkPassword = await user.comparePassword(password);

        if (checkPassword) {
          return {
            ok: true,
            error: null,
            token: "TBD"
          };
        } else {
          return {
            ok: false,
            error: "Wrong Password",
            token: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }
    }
  }
};

export default resolvers;
