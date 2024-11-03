type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: 'A Nice Weekend',
        date: 'October 20, 2024',
        description: 'I had a nice weekend going home and hanging out with Zoey and Leili',
        image: './resources/batch.jpeg',
        imageAlt: 'Picture of an ice cream shop',
        slug: 'beautiful-day',
    },
    {
        title: 'A Busy Day',
        date: 'October 22, 2024',
        description: 'Today I had a busy day. I went to class, had an interview, worked, went to the gym, and finished homework.',
        image: './resources/studying.jpg',
        imageAlt: 'birdseye image of someone studying at a coffee shop',
        slug: 'busy-day',
    }
    
]