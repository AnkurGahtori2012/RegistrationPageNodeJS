let api=require('api');
let data;
async(function () {
    try {
        data = await api.allUser();
        let ele = document.createElement("p");
ele.innerHTML = data.toString();
document.getElementsByName('body')[0].append(ele);
    } catch (err) {
        console.log("Error on fetching User data");
    }
});
