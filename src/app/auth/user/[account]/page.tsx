import UserAccMain from "@/app/auth/user/[account]/components/UserAccMain";

export const metadata = {
  title: "User Acc",
  description: "Page with user account",
};

function Page({ params }: { params: { account: string } }) {
  return <UserAccMain account={params.account} />;
}

export default Page;
