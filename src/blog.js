var blogs = [
    {
        title: 'A Nice Weekend',
        date: 'October 20, 2024',
        description: 'I had a nice weekend going home and hanging out with Zoey and Leili',
        image: '/resources/batch.jpeg',
        imageAlt: 'Picture of an ice cream shop',
        slug: 'beautiful-day',
    },
];
var blogContainer = document.getElementById('blog-container');
function displayBlogs(blogList) {
    blogList.forEach(function (blog) {
        var createDiv = document.createElement('div');
        var childTitle = document.createElement('h1');
        var childImg = document.createElement('img');
        var childDesc = document.createElement('p');
        var childLink = document.createElement('a');
        childImg.src = blog.image;
        childImg.alt = blog.imageAlt;
        childDesc.innerText = blog.description;
        childLink.href = "blog-pages/".concat(blog.slug, ".html");
        childLink.innerText = blog.title;
        childTitle.appendChild(childLink);
        createDiv.appendChild(childTitle);
        createDiv.appendChild(childImg);
        createDiv.appendChild(childDesc);
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(createDiv);
    });
}
;
displayBlogs(blogs);
