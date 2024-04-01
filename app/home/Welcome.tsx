import Heading from "../components/Heading";

const Welcome = () => {
    return (
        <section className="pb- relative fle flex-col justify-evenly  items-center">
            <section className="">
                <Heading heading="Welcome to KenyaLuxSafaris.com" subHeading="who we are" />
                <div className="flex items-center justify-center flex-col gap-16 text-center absolute top-1/2 left-1/2  w-screen -translate-x-1/2 -translate-y-1/2">
                    <p className="text-xl">
                        KenyaLuxSafaris.com offers unparalleled luxury safari experiences in the heart of Kenya&apos;s breathtaking wilderness.
                        Explore our carefully curated safari packages, designed to immerse you in the wonders of nature and provide
                        unforgettable encounters with Africa&apos;s iconic wildlife.
                    </p>
                    <a href="#safari-packages" className="inline-block bg-redishMain hover:bg-redishFaded transition-all duration-[30ms] text-white py-4 px-8 rounded-full">Explore Safari Packages</a>
                </div>
                <svg className="-z-10 fill-redishMain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1"
                    d="M0,160L120,181.3C240,203,480,245,720,256C960,267,1200,245,1320,234.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
                </path></svg>
            </section>
        </section>
    )
}

export default Welcome;