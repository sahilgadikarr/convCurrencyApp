const Footer = () => {
    return (
      <footer className=" text-center justify-center w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-4 shadow">
        <p className="items-center">
          © {new Date().getFullYear()} Currency Converter App | Made using React
        </p>
      </footer>
    )
  }
  
  export default Footer
  