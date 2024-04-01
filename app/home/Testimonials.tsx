/* eslint-disable @next/next/no-img-element */
import Heading from '../components/Heading'



export const Testimonial = () => {
    return (
        <section className="p-8 flex flex-col gap-8 justify-center items-center">
            <img src="https://images.pexels.com/photos/2862070/pexels-photo-2862070.jpeg?auto=compress&cs=tinysrgb&w=1024" alt="AAA" className="h-16 w-16 rounded-full" />
            <p className="italic p-2">
                &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis commodi cupiditate maxime inventore cum impedit delectus,
                rem ullam quam nulla facilis numquam veniam accusamus accusantium, rerum consectetur ipsa illo! Sed.&quot;
            </p>
            <label className='text-bold'>~ John Doe</label>
        </section>
    )
}


const Testimonials = () => {
    return (
        <section className='pb-16'>
            <Heading heading="Testimonials" subHeading="what customers say" />
            <section className="flex items-center flex-wap justify-evenly gap-12">
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </section>
        </section>
    )
}

export default Testimonials