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
        image: 'https://images.pexels.com/photos/2648125/pexels-photo-2648125.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Amboseli Adventure',
        description: 'Witness elephants against the backdrop of Mount Kilimanjaro in Amboseli National Park.',
        link: '#amboseli-adventure-details',
        image: 'path/to/amboseli-image.jpg',
    },
    {
        title: 'Serengeti Spectacular',
        description: 'Explore the vast plains of Serengeti National Park and witness the Great Migration.',
        link: '#serengeti-spectacular-details',
        image: 'path/to/serengeti-image.jpg',
    },
    {
        title: 'Luxe Lake Nakuru',
        description: 'Discover the flamingos of Lake Nakuru and experience luxury at lakeside lodges.',
        link: '#luxe-lake-nakuru-details',
        image: 'path/to/lake-nakuru-image.jpg',
    },
    {
        title: 'Tsavo Tranquility',
        description: 'Experience the rugged beauty of Tsavo National Park and unwind in luxury accommodations.',
        link: '#tsavo-tranquility-details',
        image: 'path/to/tsavo-image.jpg',
    },
    {
        title: 'Luxury Laikipia Safari',
        description: 'Explore the pristine wilderness of Laikipia and encounter diverse wildlife in luxury lodges.',
        link: '#luxury-laikipia-safari-details',
        image: 'path/to/laikipia-image.jpg',
    },
    {
        title: 'Luxury Coastal Retreat',
        description: 'Combine safari adventures with a luxurious beach getaway along Kenya\'s stunning coastline.',
        link: '#luxury-coastal-retreat-details',
        image: 'path/to/coastal-retreat-image.jpg',
    },
    {
        title: 'Exclusive Mara Conservancies',
        description: 'Discover the exclusive conservancies bordering Maasai Mara and enjoy unrivaled wildlife experiences.',
        link: '#exclusive-mara-conservancies-details',
        image: 'https://images.pexels.com/photos/773000/pexels-photo-773000.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Wildlife Photography Expedition',
        description: 'Join a specialized photography safari to capture stunning wildlife moments in Kenya\'s natural habitats.',
        link: '#wildlife-photography-expedition-details',
        image: 'https://images.pexels.com/photos/2804411/pexels-photo-2804411.jpeg?auto=compress&cs=tinysrgb&w=600',
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
        <section className="featured-packages-section pb-16 relative">
            <Heading heading="Luxury Safari Packages" subHeading="Featured" />
            <Carousel responsive={responsive} autoPlay={true} infinite={true} rewind={true} showDots={true} focusOnSelect={true} renderDotsOutside={true} >
                {safariPackages.map((packageObj) => <FeaturedCard packageObj={packageObj} key={packageObj.description} />)}
            </Carousel>;
        </section >
    );
};

export default FeaturedPackages;


