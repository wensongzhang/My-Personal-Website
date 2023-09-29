function Footer() {
    return (
        <footer className="flex justify-center mt-32 mb-16 footer">
            <div className="flex flex-col footer-container gap-3">
                <div className="flex gap-1 text-primary-300 flex justify-center">
                    <a href="mailto:zhangwensonggg@gmail.com" className="hover:text-teal-500">E-mail</a> / 
                    <a href="https://www.linkedin.com/in/zhangwensong/" target="_blank" className="hover:text-teal-500">LinkedIn</a> /
                    <a href="https://github.com/wensongzhang" target="_blank" className="hover:text-teal-500">GitHub</a>
                </div>
                <p className="flex text-primary-300 footer-text">
                © 2023 Wensong Zhang All Rights Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;
