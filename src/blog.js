var blogs = [
    {
        title: 'A Nice Weekend',
        date: 'October 20, 2024',
        description: 'I had a nice weekend going home and hanging out with Zoey and Leili',
        image: '/resources/batch.jpeg',
        imageAlt: 'Picture of an ice cream shop',
        slug: 'beautiful-day',
    },
    {
        title: 'A Busy Day',
        date: 'October 22, 2024',
        description: 'Today I had a busy day. I went to class, had an interview, worked, went to the gym, and finished homework.',
        image: '/resources/studying.jpg',
        imageAlt: 'birdseye image of someone studying at a coffee shop',
        slug: 'busy-day',
    }
];
var blogContainer = document.getElementById('blog-container');
function displayBlogs(blogList) {
    blogList.forEach(function (blog) {
        var createDiv = document.createElement('div');
        var childTitle = document.createElement('h1');
        var childDate = document.createElement('p');
        var childImg = document.createElement('img');
        var childDesc = document.createElement('p');
        var childLink = document.createElement('a');
        childDate.innerText = blog.date;
        childImg.src = blog.image;
        childImg.alt = blog.imageAlt;
        childDesc.innerText = blog.description;
        childLink.href = "blog-pages/".concat(blog.slug, ".html");
        childLink.innerText = blog.title;
        //styling
        createDiv.style.backgroundColor = '#D9D7C5';
        createDiv.style.maxWidth = '700px';
        createDiv.style.padding = '15px';
        createDiv.style.margin = '20px 0';
        createDiv.style.boxShadow = '8px 8px 5px #243B45';
        createDiv.style.borderRadius = '10px';
        childImg.style.maxWidth = '100px';
        childLink.style.textDecoration = 'none';
        childLink.style.color = 'inherit';
        childTitle.appendChild(childLink);
        createDiv.appendChild(childTitle);
        createDiv.appendChild(childDate);
        createDiv.appendChild(childImg);
        createDiv.appendChild(childDesc);
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(createDiv);
    });
}
;
displayBlogs(blogs);
