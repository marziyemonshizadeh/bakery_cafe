type ServiceProps = {
  text: string;
};

const Service: React.FC<React.PropsWithChildren<ServiceProps>> = ({
  text,
  children,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#2e2b27] dark:bg-[#D1B48C] w-32 h-32 p-8 rounded-full">
        {children}
      </div>
      <p className="text-[#2e2b27] dark:text-[#D1B48C] py-2">{text}</p>
    </div>
  );
};

export default Service;
