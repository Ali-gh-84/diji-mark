import brandOne from '../../assets/images/main.svg';
import brandTwo from '../../assets/images/scribble.png';
import brandThree from '../../assets/images/b1.jpg';
import brandfour from '../../assets/images/b2.jpg';
import brandfive from '../../assets/images/b3.jpg';
import brandsix from '../../assets/images/b4.jpg';
import Slider from "../../components/slider/slider";
import AnswerCollaps from "../../components/answer-collaps/answer-collaps";

function HomePage() {

    const sliderData = {
        swiperSlides: [
            {
                img: brandThree,
                text: 'لورم ایپسوم تولید کننده متن های تصادفی و تستی'
            },
            {
                img: brandfour,
                text: 'لورم ایپسوم تولید کننده متن های تصادفی و تستی'
            },
            {
                img: brandfive,
                text: 'لورم ایپسوم تولید کننده متن های تصادفی و تستی'
            },
            {
                img: brandsix,
                text: 'لورم ایپسوم تولید کننده متن های تصادفی و تستی'
            },
        ],
        spaceBetween: 50,
        slidesPerView: 3,

    }

    const collapsData = [
        {
            title: "برند چیست ؟",
            text: "لورم ایپسوم تولید کننده متن های تصادفی و تستی"
        },
        {
            title: "برای ثبت برند حقیقی به چه مدارکی نیاز است ؟",
            text: "لورم ایپسوم تولید کننده متن های تصادفی و تستی"
        },
        {
            title: "تفاوت ثبت برند حقیقی و حقوقی چیست ؟",
            text: "لورم ایپسوم تولید کننده متن های تصادفی و تستی"
        },
        {
            title: "برای ثبت برند حقوقی به چه مدارکی نیاز داریم ؟",
            text: "لورم ایپسوم تولید کننده متن های تصادفی و تستی"
        },
    ]
    return (
        <>
            <div className="flex bg-gray-300 min-h-[70vh] items-center justify-center px-5 py-12 md:px-8 lg:px-12">
                <div
                    className="flex w-full max-w-6xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
                    <div className="w-full md:w-1/2 order-1 md:order-1">
                        <img
                            src={brandOne}
                            alt="تصویر برند"
                            className="mx-auto w-full max-w-[380px] md:max-w-full"
                        />
                    </div>

                    <div className="w-full md:w-1/2 order-1 md:order-1 flex flex-col items-end text-right">
                        <h2 className="text-blue-950 text-3xl font-bold leading-tight md:text-3xl lg:text-4xl">
                            چشمی همیشه بیدار برای برندت
                        </h2>

                        <p className="mt-5 text-lg text-gray-700 md:text-xl leading-relaxed">
                            با خیالی آسوده از برند خود محافظت کنید. ما به صورت مستمر برند شما را رصد می‌کنیم و در صورت
                            ثبت
                            هرگونه
                            نشان تجاری مشابه، بلافاصله به شما اطلاع می‌دهیم. پیش از آنکه دیر شود از حقوق برند خود دفاع
                            کنید.
                        </p>

                        <div className="mt-8 flex w-full justify-center gap-2 sm:gap-6 sm:justify-center items-center">

                            <img
                                src={brandTwo}
                                alt="scribble"
                                className="h-12"
                            />

                            <div className="relative flex h-14 w-14 items-center justify-center">
                                <div className="absolute h-14 w-14 rounded-full bg-blue-100 opacity-100">
                                    <button
                                        type="button"
                                        className="font-bold text-blue-800 text-2xl"
                                    >
                                        شروع کنید
                                    </button>
                                </div>
                                <div className="h-9 w-9 rounded-full bg-blue-900">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center pt-4 pb-4">
                <h3 className="text-2xl">
                    مقالات
                </h3>
                <p className="text-lg">
                    با ما بیشتر در مورد برند بدانید
                </p>
            </div>

            <div className="flex items-center justify-center gap-4 px-6 pt-7 bg-white rounded-2xl">
                <div className="
    w-full
    md:w-3/4
    rounded-full
    px-1
  ">
                    <Slider
                        slides={sliderData.swiperSlides.map((item, index) => (
                            <div
                                className="
            flex flex-col items-center
            w-full
            min-h-[500px]
            p-2
            bg-gray-300
            rounded-xl
            shadow-sm
            hover:shadow-md
            transition-all duration-300
            text-center
          "
                            >
                                <img
                                    src={item.img}
                                    alt="logo"
                                    className="
              w-full h-80
              object-cover
              rounded-xl
              mb-6
            "
                                />
                                <p className="text-gray-800 font-medium text-lg leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                        slidesPerView={1}
                        spaceBetween={16}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 32,
                            },
                        }}
                        loop={true}
                    />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center pt-5 pb-4">
                <h3 className="text-2xl">
                    سوالات متداول
                </h3>
            </div>
            <div className="flex items-center justify-center pt-4 pb-4">
                <div className="w-full px-4 sm:px-6 md:w-3/4 lg:w-3/4 space-y-5 md:space-y-6">
                    {collapsData.map((item, index) => (
                        <AnswerCollaps
                            key={index}
                            title={item.title}
                        >
                            {item.text ? (
                                <div
                                    className="text-gray-700 leading-relaxed"
                                    dangerouslySetInnerHTML={{__html: item.text}}
                                />
                            ) : (
                                <p className="text-gray-600">محتوایی برای این بخش تعریف نشده است.</p>
                            )}
                        </AnswerCollaps>
                    ))}
                </div>
            </div>
        </>
    );
}

export default HomePage;