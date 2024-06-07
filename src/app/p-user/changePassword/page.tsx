import Layout from "@/components/layouts/panelUserLayout";
import Title from "@/components/modules/panelUser/panelUserTitle";
import ChangePasswordForm from "@/components/templates/p-user/changePassword/changePasswordForm";

const ChangePassword = () => {
  return (
    <Layout>
      <Title text="تغییر رمز عبور" />
      <ChangePasswordForm />
    </Layout>
  );
};

export default ChangePassword;
