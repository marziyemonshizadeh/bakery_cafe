import Layout from "@/components/layouts/panelUserLayout";
import Title from "@/components/modules/panelUser/panelUserTitle";
import AccountDetailsForm from "@/components/templates/p-user/accountDetails/accountDetailsForm";
import { authUser } from "@/utils/serverHelpers";

type Props = {};

async function AccountDetails({}: Props) {
  const user = await authUser();

  return (
    <Layout>
      <Title text="جزئیات اکانت" />
      <AccountDetailsForm user={JSON.parse(JSON.stringify(user))} />
    </Layout>
  );
}

export default AccountDetails;
