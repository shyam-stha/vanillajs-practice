import data from "./data.json" assert { type: "json" };
const createPostBtn = document.getElementById("createBtn");
const form = document.querySelector(".form");
const postBlogBtn = document.getElementById("postBlog");
const featured = document.querySelector(".featured");
const popular = document.querySelector(".popular");
const all = document.querySelector(".all");

let formStatus = false;

let blogList = [
  {
    title: "Closure in javascript, and lexical scoping",
    author: "Natash walker",
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Natasha_Lyonne_2014_%28cropped%29.jpg",
    image:
      "https://dmitripavlutin.com/simple-explanation-of-javascript-closures/cover.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ea aliquid repellat corporis totam perspiciatis nihil eaque consectetur dolorum excepturi?",
    date: "Oct 12, 2021",
    category: "popular",
  },
  {
    title: "Closure in javascript, and lexical scoping",
    author: "Natash walker",
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Natasha_Lyonne_2014_%28cropped%29.jpg",
    image:
      "https://dmitripavlutin.com/simple-explanation-of-javascript-closures/cover.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ea aliquid repellat corporis totam perspiciatis nihil eaque consectetur dolorum excepturi?",
    date: "Oct 12, 2021",
    category: "popular",
  },
  {
    title: "Closure in javascript, and lexical scoping",
    author: "Natash walker",
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Natasha_Lyonne_2014_%28cropped%29.jpg",
    image:
      "https://dmitripavlutin.com/simple-explanation-of-javascript-closures/cover.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ea aliquid repellat corporis totam perspiciatis nihil eaque consectetur dolorum excepturi?",
    date: "Oct 12, 2021",
    category: "popular",
  },
  {
    title: "Closure in javascript, and lexical scoping",
    author: "Natash walker",
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Natasha_Lyonne_2014_%28cropped%29.jpg",
    image:
      "https://dmitripavlutin.com/simple-explanation-of-javascript-closures/cover.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ea aliquid repellat corporis totam perspiciatis nihil eaque consectetur dolorum excepturi?",
    date: "Oct 12, 2021",
    category: "featured",
  },
  {
    title: "Closure in javascript, and lexical scoping",
    author: "Natash walker",
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Natasha_Lyonne_2014_%28cropped%29.jpg",
    image:
      "https://dmitripavlutin.com/simple-explanation-of-javascript-closures/cover.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ea aliquid repellat corporis totam perspiciatis nihil eaque consectetur dolorum excepturi?",
    date: "Oct 12, 2021",
  },
  {
    title: "Closure in javascript, and lexical scoping",
    author: "Natash walker",
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Natasha_Lyonne_2014_%28cropped%29.jpg",
    image:
      "https://dmitripavlutin.com/simple-explanation-of-javascript-closures/cover.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ea aliquid repellat corporis totam perspiciatis nihil eaque consectetur dolorum excepturi?",
    date: "Oct 12, 2021",
    category: "featured",
  },
  {
    title: "Closure in javascript, and lexical scoping",
    author: "Natash walker",
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Natasha_Lyonne_2014_%28cropped%29.jpg",
    image:
      "https://dmitripavlutin.com/simple-explanation-of-javascript-closures/cover.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ea aliquid repellat corporis totam perspiciatis nihil eaque consectetur dolorum excepturi?",
    date: "Oct 12, 2021",
    category: "popular",
  },
];

const getBlogList = () => {
  let blog = document.querySelectorAll(".blog");
  blog.forEach((item, key) => {
    let deleteBtn = item.children[1].children[0];

    deleteBtn.addEventListener("click", () => {
      let confirmStatus = confirm("Are you sure you want to delete this..");
      if (confirmStatus) {
        blogList.splice(key, 1);
        featured.innerHTML = "";
        all.innerHTML = "";
        popular.innerHTML = "";
        getBlogs();
      }
    });

    let editBtn = item.children[1].children[1]
    editBtn.addEventListener('click', ()=>{
        
    })
  });
};

const getBlogs = () => {
  blogList.forEach((blog, key) => {
    if (blog.category === "popular") {
      document.querySelector(".popular").innerHTML += `
            <div class='blog'>
                <div class='img-wrapper'> 
                    <img src='${blog.image}' alt="img" />
                </div>  
                <div class ='blog-wrapper'>
                    <button id='deleteBtn'>Delete</button>
                    <button id='editBtn'>Edit</button>
                    <div class='title'>${blog.title}</div>
                    <div class='description'>${blog.description}</div>
                    <div class='author'>
                        <img class='author-img'src='${blog.authorImg}' alt='img'/>
                        <div class="author-wrapper">
                        <div class='author-name'>${blog.author}</div>
                        <div class='date'>${blog.date}</div>
                    </div>
                    </div>
                </div>
            </div>
                    `;
    } else if (blog.category === "featured") {
      document.querySelector(".featured").innerHTML += `
            <div class='blog'>
                <div class='img-wrapper'> 
                    <img src='${blog.image}' alt="img" />
                </div>  
                <div class ='blog-wrapper'>
                    <button id='deleteBtn'>Delete</button>
                    <button id='editBtn'>Edit</button>
                    <div class='title'>${blog.title}</div>
                    <div class='description'>${blog.description}</div>
                    <div class='author'>
                        <img class='author-img'src='${blog.authorImg}' alt='img'/>
                        <div class="author-wrapper">
                        <div class='author-name'>${blog.author}</div>
                        <div class='date'>${blog.date}</div>
                    </div>
                    </div>
                </div>
            </div>
                    `;
    }
    document.querySelector(".all").innerHTML += `
        <div class='blog'>
            <div class='img-wrapper'> 
                <img src='${blog.image}' alt="img" />
            </div>  
            <div class ='blog-wrapper'>
                <button id='deleteBtn'>Delete</button>
                <button id='editBtn'>Edit</button>
                <div class='title'>${blog.title}</div>
                <div class='description'>${blog.description}</div>
                <div class='author'>
                    <img class='author-img'src='${blog.authorImg}' alt='img'/>
                    <div class="author-wrapper">
                    <div class='author-name'>${blog.author}</div>
                    <div class='date'>${blog.date}</div>
                </div>
                </div>
            </div>
        </div>
                `;
  });
  getBlogList();
};

getBlogs();

createPostBtn.addEventListener("click", () => {
  if (!formStatus) {
    formStatus = true;
    createPostBtn.innerHTML = "Cancel";
    form.style.display = "flex";
  } else {
    formStatus = false;
    createPostBtn.innerHTML = "Create Blog";
    form.style.display = "none";
  }
});

postBlogBtn.addEventListener("click", () => {
  let blog = document.querySelectorAll(".form");
  const blogObj = {
    title: blog[0].children[0].value,
    image: blog[0].children[1].value,
    author: blog[0].children[2].value,
    authorImg: blog[0].children[3].value,
    description: blog[0].children[4].value,
    date: blog[0].children[5].value,
    category: blog[0].children[6].value,
  };

  blogList.push(blogObj);
  featured.innerHTML = "";
  all.innerHTML = "";
  popular.innerHTML = "";
  getBlogs();
  formStatus = false;
  createPostBtn.innerHTML = "Create Blog";
  form.style.display = "none";
});
