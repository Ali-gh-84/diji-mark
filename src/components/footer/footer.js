import logo from '../../assets/images/logo.svg';
import {getContactIcon} from '../../assets/icons/contactIcons';

function Footer() {
    const pages = ["درباره ما", "سوالات متداول", "خرید اشتراک", "خانه"];

    const contacts = [
        {title: "تهران میدان محمدیه نبش خیام جنوبی پلاک 1", icon: "map-pin"},
        {title: "021-55819622", icon: "phone"},
        {title: "09125508799", icon: "phone"},
        {title: "info@anybrand.ir", icon: "mail"},
    ];

    return (
        <footer className="bg-blue-900 rounded-2xl mx-3 mt-5 mb-5 p-6 md:p-8 text-white">
            <div
                className="flex flex-col md:flex-row-reverse md:justify-between md:items-start gap-10 md:gap-6 max-w-7xl mx-auto">

                <div
                    className="flex flex-col items-center md:items-end text-center md:text-right order-last md:order-none">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-16 md:h-20 mb-4"
                    />
                    <p className="mb-6 text-sm md:text-base leading-relaxed max-w-md">
                        آنی برند با هدف کمک به حفظ انحصار نام برندها و تجربه‌ای منحصر به فرد برای مشتریان خود فراهم
                        می‌کند
                    </p>
                    <p className="text-sm md:text-base">
                        ما را در شبکه‌های اجتماعی دنبال کنید
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-right">
                    <h3 className="text-lg font-bold border-b-2 border-white/30 pb-2 mb-4">
                        دسترسی سریع
                    </h3>
                    <ul className="space-y-3">
                        {pages.map((page, index) => (
                            <li key={index} className="hover:underline cursor-pointer">
                                {page}
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="flex flex-col items-center md:items-end text-center md:text-right">
                    <h3 className="text-lg font-bold border-b-2 border-white/30 pb-2 mb-4">ارتباط با ما</h3>
                    <ul className="space-y-4">
                        {contacts.map((contact, index) => {
                            const Icon = getContactIcon(contact.icon);
                            return (
                                <li
                                    key={index}
                                    className="flex items-center gap-3 justify-center md:justify-start flex-row-reverse"
                                >
                                    <Icon size={20}
                                          className="text-white/80 flex-shrink-0 md:justify-start text-end"/>
                                    <span>{contact.title}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;