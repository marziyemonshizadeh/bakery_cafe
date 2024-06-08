import HandleShowAuth from "@/components/templates/login-register/handleShowAuth";

export default function LoginRegister() {
  return (
    <section
      className="bg-gray-50 dark:bg-gray-900 h-full w-full bg-cover"
      style={{
        backgroundImage: 'url("/images/login-register-background.jpg")',
      }}
    >
      <div className="flex flex-col justify-center items-center px-6 py-8 h-screen lg:py-0">
        <HandleShowAuth />
      </div>
    </section>
  );
}
