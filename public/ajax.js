let btn = document.getElementById('btn');
let div = document.getElementById('demo');
btn.addEventListener('click', () => {

    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            demo.innerHTML = xhr.responseText;
        }

    });

    //xhr.open("GET", "http://192.168.1.108:9000/public/users/login");
    //xhr.open("GET", "http://192.168.1.108:9000/public/users/test");
    xhr.open("GET", "http://192.168.1.108:9000/protected/current");
    xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW0iLCJleHAiOjYxNDk5OTQ4NDAwLCJpZCI6IjA3NzQ2OTZkLTM0MmItNGU1YS04Yzg1LTMyYmNjYjQ4ODVmZiIsInJ1b2xpIjpbIkFETUlOIiwiVVNFUiJdfQ.Y7YSZz4To40V6qB5Y-uSvmSqnZZrK8L_4A3UdNz5N_LL7r8qOzCnDR6VFDp7qZpJQ85OmmLB2IT2e78CB8CykA");
    //xhr.setRequestHeader("Authorization", "Basic c2FtOmFzZA==");
    //xhr.setRequestHeader("Access-Control-Allow-Origin", "")
    xhr.setRequestHeader("Cache-Control", "no-cache");
 

    xhr.send(data);

});