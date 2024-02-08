//Subseuance 
function sub(que, ans) {
    if (que.length === 0) {
        console.log(ans);
        return;
    }
    sub(que.substr(1), ans + "");
    sub(que.substr(1), ans + que.charAt(0));
}
(sub("abc", ""));