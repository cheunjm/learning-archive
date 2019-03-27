import {
  StartPhoneVerificationMutationArgs,
  StartPhoneVerificationResponse
} from "../../../types/graph";

import { Resolvers } from "../../../types/resolver";
import Verification from "../../../entities/Verification";

const resolvers: Resolvers = {
  Mutation: {
    StartPhoneVerifcation: async (
      _,
      args: StartPhoneVerificationMutationArgs
    ): Promise<StartPhoneVerificationResponse> => {
      const { phoneNumber } = args;
      try {
        const existingVerification = await Verification.findOne({
          payload: phoneNumber
        });

        if (existingVerification) {
          existingVerification.remove();
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message
        };
      }
    }
  }
};

export default resolvers;
