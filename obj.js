//place Name object inside Address obj
//place Nested object outside in the obj
let obj = {
    Name: "vaibhav",
    rollNo: 12,
    Address: {
        place: "Maharatra",
    },

    phoneNo: 121056,


}

// obj.Address.Name = obj.Name;
// delete obj.Name;
obj.place = obj.Address.place;
delete obj.Address.place;
console.log(obj);