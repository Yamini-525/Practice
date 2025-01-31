let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
let currentBlogIndex = null;

function saveToLocalStorage() {
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

function renderBlogList() {
    const blogListContainer = document.querySelector('.blog-list');
    blogListContainer.innerHTML = '';
    blogs.forEach((blog, index) => {
        const blogElement = document.createElement('div');
        blogElement.classList.add('container');
        blogElement.innerHTML = `
            <h2>${blog.title}</h2>
            <p>${blog.content.substring(0, 100)}...</p>
            <p>Number of views: <span id="views-${index}">${blog.views}</span></p>
            <div class="right-container">
                <button class="but5" onclick="openBlog(${index})">OPEN</button>
                <button class="but2" onclick="editBlog(${index})">UPDATE</button>
                <button class="but3" onclick="deleteBlog(${index})">DELETE</button>
                <button class="but4" onclick="viewBlog(${index})">READ</button>
            </div>
        `;
        blogListContainer.appendChild(blogElement);
    });
}

function handleAddBlogButtonClick() {
    currentBlogIndex = null;
    document.getElementById('modal-title').innerText = 'Add New Blog';
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById('blog-modal').style.display = 'block';
}

function handleSaveBlogButtonClick(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    if (currentBlogIndex === null) {
        blogs.push({ title, content, views: 0 });
    } else {
        blogs[currentBlogIndex].title = title;
        blogs[currentBlogIndex].content = content;
    }
    
    saveToLocalStorage();
    renderBlogList();
    document.getElementById('blog-modal').style.display = 'none';
}

function deleteBlog(index) {
    blogs.splice(index, 1);
    saveToLocalStorage();
    renderBlogList();
}

function editBlog(index) {
    currentBlogIndex = index;
    document.getElementById('modal-title').innerText = 'Edit Blog';
    document.getElementById('title').value = blogs[index].title;
    document.getElementById('content').value = blogs[index].content;
    document.getElementById('blog-modal').style.display = 'block';
}

function viewBlog(index) {
    blogs[index].views++;
    document.getElementById(`views-${index}`).innerText = blogs[index].views;
    saveToLocalStorage();
}

function openBlog(index) {
    document.getElementById('view-modal-title').innerText = blogs[index].title;
    document.getElementById('view-modal-content').innerText = blogs[index].content;
    document.getElementById('view-modal').style.display = 'block';
}

document.getElementById('save-blog-btn').addEventListener('click', handleSaveBlogButtonClick);
document.getElementById('cancel-btn').addEventListener('click', () => {
    document.getElementById('blog-modal').style.display = 'none';
});
document.getElementById('close-view-btn').addEventListener('click', () => {
    document.getElementById('view-modal').style.display = 'none';
});

renderBlogList();
