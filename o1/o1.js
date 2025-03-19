// console.dir(document);
// let div = document.getElementById("demo");
// console.log(div);

// let elementList = document.getElementsByClassName("demo-01");
// let div1 = elementList[0];

// let b = elementList[2];
// console.log(b);

// console.log(div1);
// console.log(elementList);


// for (let i = 0; i <= elementList.length-1; i = i + 1){
//     console.log(elementList[i]);
    
// }

// elementList.forEach((e,i)=> {
//     console.log(e);
    
// });
// let divs = document.getElementsByTagName("div");

// console.log(divs);

// let elementList01 = document.getElementsByTagName("demo-01");

// html sang javascript
// let div = document.querySelector("div#demo.demo-01");
// console.log(div);

// let divs = document.querySelectorAll("div.demmo-01");
// console.log(divs);

// let p = document.getElementById("paragraph");
// console.log(p);
// console.log(document);

// console.log(p.innerHTML);
// console.log(p.innerText);
// console.log(p.textContent);

// p.textContent = "hello word";
// p.innerText = "Nội dung ";
// p.innerHTML = "<b><i>Xin Chào Các Bạn</i></b>";

// let img = document.getElementsByTagName("img")[0];
// console.log(img);

// let link = img.getAttribute("src");
// console.log(link);

// let a = document.getElementById("anchor");
// console.log(a);
// let url = a.getAttribute("href");
// console.log(url);
// thiết lập lại giá trị mới 
// a.setAttribute("href","http://rikkei.edu.vn");

// let div1 = document.getElementById("demo-style");

// console.log(div1.style);
// console.log(div1.style.backgroundColor);
// div1.style.backgroundColor = "red";
// div1.style.fontSize = "30px";
// div1.style.color = "white";
// div1.style.width = "300px";
// div1.style.height = "300px";
// div1.style.borderRadius = "50%";
// div1.style.textAlign = "center";
// div1.style.lineHeight = "300px";


// console.log(div1.classList);

// div1.classList.add("c4"); // thêm
// div1.classList.remove("c2");// xóa
// let check = div1.classList.contains("c2");// kiểm tra có tồn tại không // false
// console.log(check);

// let check1= div1.classList.toggle("demo-toggle");// kiểm tra như công tắc
// console.log(check1);

// div1.classList.add("demo-class-list");


// let ul = document.getElementById("unordered-list");
// console.log(ul.children[2]);// ba thẻ li
// let lastLi = ul.children[2];
// console.log(lastLi.parentElement);


// let li = document.createElement("li");
// // console.log(li);
// li.innerHTML = "<b>Hello</b>"

// let a1 = document.createElement("a1");
// console.log(a1);

// let ul = document.getElementById("unordered-list");
// // console.log(ul);
// ul.appendChild("li");

// li.remove();
// ul.remove();


// function handleClick(){
//     console.log("Hello Word");
//     console.log("Sự kiện onClick vừa xảy ra");
// }

let btn = document.getElementById("btn-04")
btn.addEventListener("mouseenter", function(){
    console.log("Sự kiện vừa xảy ra");
    
})
