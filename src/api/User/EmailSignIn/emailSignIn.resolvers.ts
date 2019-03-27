import { EmailSignInMutationArgs, EmailSignInResponse } from "src/types/graph";

import { Resolvers } from "src/types/resolver";
import User from "../../../entities/User";

const resolvers: Resolvers = {
  Mutation: {
    EmailSignIn: async (
      _,
      args: EmailSignInMutationArgs
    ): Promise<EmailSignInResponse> => {
      const { email } = args;

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
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }

      // Check if password is correcct
    }
  }
};

export default resolvers;
