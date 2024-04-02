"use client"
import Heading from '../components/Heading';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Package } from '../Types';
import FeaturedCard from './FeaturedCard';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const safariPackages: Package[] = [
    {
        title: 'Maasai Mara Majesty',
        description: 'Encounter the Big Five in Maasai Mara, enjoy sunset game drives, and stay in luxurious tented camps.',
        link: '#maasai-mara-majesty-details',
        images: [
            "https://images.pexels.com/photos/12004888/pexels-photo-12004888.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/10822356/pexels-photo-10822356.jpeg?auto=compress&cs=tinysrgb&w=600"
        ]
    },
    {
        title: 'Amboseli Adventure',
        description: 'Witness elephants against the backdrop of Mount Kilimanjaro in Amboseli National Park.',
        link: '#amboseli-adventure-details',
        images: [
            "https://images.pexels.com/photos/13033120/pexels-photo-13033120.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/12844386/pexels-photo-12844386.jpeg?auto=compress&cs=tinysrgb&w=600"
        ]
    },
    {
        title: 'Serengeti Spectacular',
        description: 'Explore the vast plains of Serengeti National Park and witness the Great Migration.',
        link: '#serengeti-spectacular-details',
        images: [
            "https://images.pexels.com/photos/6056778/pexels-photo-6056778.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/6427367/pexels-photo-6427367.jpeg?auto=compress&cs=tinysrgb&w=600"
        ]
    },
    {
        title: 'Luxe Lake Nakuru',
        description: 'Discover the flamingos of Lake Nakuru and experience luxury at lakeside lodges.',
        link: '#luxe-lake-nakuru-details',
        images: [
            "https://images.pexels.com/photos/18104411/pexels-photo-18104411/free-photo-of-flock-of-flamingos-on-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/17814165/pexels-photo-17814165/free-photo-of-flamingos-near-stream.jpeg?auto=compress&cs=tinysrgb&w=600"
        ]
    },
    {
        title: 'Tsavo Tranquility',
        description: 'Experience the rugged beauty of Tsavo National Park and unwind in luxury accommodations.',
        link: '#tsavo-tranquility-details',
        images: [
            "https://images.pexels.com/photos/9807764/pexels-photo-9807764.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/3992516/pexels-photo-3992516.jpeg?auto=compress&cs=tinysrgb&w=600"
        ]
    },
    {
        title: 'Luxury Laikipia Safari',
        description: 'Explore the pristine wilderness of Laikipia and encounter diverse wildlife in luxury lodges.',
        link: '#luxury-laikipia-safari-details',
        images: [
            "https://images.pexels.com/photos/4404524/pexels-photo-4404524.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/39504/giraffe-animal-funny-facial-expression-39504.jpeg?auto=compress&cs=tinysrgb&w=1024"
        ]
    },
    {
        title: 'Luxury Coastal Retreat',
        description: 'Combine safari adventures with a luxurious beach getaway along Kenya\'s stunning coastline.',
        link: '#luxury-coastal-retreat-details',
        images: [
            "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=600"
        ]
    },
    {
        title: 'Exclusive Mara Conservancies',
        description: 'Discover the exclusive conservancies bordering Maasai Mara and enjoy unrivaled wildlife experiences.',
        link: '#exclusive-mara-conservancies-details',
        images: [
            "https://images.pexels.com/photos/17766016/pexels-photo-17766016/free-photo-of-elderly-man-sitting-on-an-elephant.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/12004884/pexels-photo-12004884.jpeg?auto=compress&cs=tinysrgb&w=600"
        ]
    },
    {
        title: 'Wildlife Photography Expedition',
        description: 'Join a specialized photography safari to capture stunning wildlife moments in Kenya\'s natural habitats.',
        link: '#wildlife-photography-expedition-details',
        images: [
            "https://images.pexels.com/photos/17749482/pexels-photo-17749482/free-photo-of-young-men-in-colorful-shuka-throws-standing-on-a-cow-pasture.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/9185432/pexels-photo-9185432.jpeg?auto=compress&cs=tinysrgb&w=600"
        ]
    },
];



const FeaturedPackages: React.FC = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="featured-packages-section py-16 relative bg-slate-100">
            <Heading heading="Luxury Safari Packages" subHeading="Featured" />
            <Carousel transitionDuration={4000} responsive={responsive} autoPlay={true} infinite={true} rewind={true} showDots={true} focusOnSelect={true} renderDotsOutside={true} >
                {safariPackages.map((packageObj) => <FeaturedCard packageObj={packageObj} key={packageObj.description} />)}
            </Carousel>
        </section >
    );
};

export default FeaturedPackages;


