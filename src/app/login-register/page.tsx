import Login from "@/components/templates/login-register/login";
// import Register from "@/components/templates/login-register/register";
// import SendSms from "@/components/templates/login-register/sendSms";

export default function LoginRegister({}) {
  return (
    <section
      className="bg-gray-50 dark:bg-gray-900 w-full h-screen bg-no-repeat	"
      style={{
        backgroundImage: 'url("/images/promote/promote.jpg")',
        objectFit: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-center px-6 py-8 h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <Login />
          {/* <Register /> */}
          {/* <SendSms /> */}
        </div>
      </div>
    </section>
  );
}
