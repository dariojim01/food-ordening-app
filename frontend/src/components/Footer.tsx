const Footer = () => {
  
    return(
        <div className="bg-orange-500 py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                <span className="text-white text-3xl font-bold tracking-tight">
                    MernDJeats.com
                </span>
                <span className="text-white text-xl font-bold tracking-tight">
                    <span>Privacy Policy</span>
                    <span>Terms of Service </span>
                    © 2024
                </span>
            </div>
        </div>
    )
}

export default Footer;