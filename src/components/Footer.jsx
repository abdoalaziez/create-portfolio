const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col gap-3 items-center justify-center p-10 bg-gray-200 rounded-tl-[30%] rounded-tr-[30%]">
      <p className="font-bold">Umran Abdo</p>
      <p>&copy; {currentYear} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
