import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ReverseSlider.css'


import fruits from '../../../images/fruits.jpg'
import cherries from '../../../images/cherries.jpg';
import smoothie from '../../../images/smoothie.jpg';
import popcorn from '../../../images/popcorn.jpg';



const ReverseSlider = () => {

    const scrollerRef = useRef(null);
    const revealRef = useRef(null);

    const items = ['Fruits', 'Cherries', 'Smoothie', 'Popcorn'];
    const images = {
        Fruits: fruits,
        Cherries: cherries,
        Smoothie: smoothie,
        Popcorn: popcorn,
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = scrollerRef.current.scrollTop;
            const scrollHeight = scrollerRef.current.scrollHeight;
            const clientHeight = scrollerRef.current.clientHeight;

            // Calculate the scroll fraction of scroller (inverted)
            const scrollFraction = 1 - (scrollTop / (scrollHeight - clientHeight));

            // Set the scroll position of reveal
            revealRef.current.scrollTop = scrollFraction * (revealRef.current.scrollHeight - revealRef.current.clientHeight);
        };

        // Set the initial scroll position
        const setInitialScroll = () => {
            const scroller = scrollerRef.current;
            const reveal = revealRef.current;

            // Calculate the height of each section
            const itemCount = items.length;
            const revealHeight = reveal.scrollHeight / itemCount;

            // Set the scrollTop for scroller to show the first item
            scroller.scrollTop = 0;
            // Set the scrollTop for reveal to show first image
            reveal.scrollTop = (itemCount - 1) * revealHeight;
        };

        setInitialScroll(); // Set the initial position
        const scroller = scrollerRef.current;
        scroller.addEventListener('scroll', handleScroll);

        return () => {
            scroller.removeEventListener('scroll', handleScroll);
        };
    }, [items.length]);



    return (
        <div className='reverseSlider'>
            <h1>Reveal Scroller</h1>

            <section className='revealScroller'>
                <section className='scroller' ref={scrollerRef}>
                    {items.map((item) => (
                        <p className='slideLabel' key={item}>{item}</p>
                    ))}
                </section>
                <section className='reveal' ref={revealRef}>
                    {items.slice().reverse().map((item) => (  // Reverse the order of items
                        <img
                            key={item}
                            className='picture'
                            src={images[item]}
                            alt={item}
                        />
                    ))}
                </section>
            </section>

            <Link to='/'>Return Home</Link>

        </div>
    )
}

export default ReverseSlider
