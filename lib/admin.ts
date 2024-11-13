import { auth } from "@clerk/nextjs/server";

const adminIds = "user_2j0yxKATzxn2UX009Jt7dZWRpua";

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }
  return adminIds.indexOf(userId) !== -1;
};
