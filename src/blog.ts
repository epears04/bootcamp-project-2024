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
        image: '/resources/batch.jpeg',
        imageAlt: 'Picture of an ice cream shop',
        slug: 'beautiful-day',
    },
    
]

const blogContainer = document.getElementById('blog-container');

function displayBlogs(blogList: Blog[]) {
    blogList.forEach(blog => {
        const createDiv = document.createElement('div');
        const childTitle = document.createElement('h1');
        const childImg = document.createElement('img');
        const childDesc = document.createElement('p');
        const childLink = document.createElement('a');

        childImg.src = blog.image;
        childImg.alt = blog.imageAlt;
        childDesc.innerText = blog.description; 
        childLink.href = `blog-pages/${blog.slug}.html`
        childLink.innerText = blog.title;

        childTitle.appendChild(childLink);
        createDiv.appendChild(childTitle);
        createDiv.appendChild(childImg);
        createDiv.appendChild(childDesc);

        blogContainer?.appendChild(createDiv);
    });
};

displayBlogs(blogs); 