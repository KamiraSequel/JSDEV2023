const { creatApp } = Vue;

let vm = creatApp ({
    data() {
        return {
            fname: "Ion",
            lname: "Pop",
            address: "Brasov",
            message: "Imi place JavaScript",
        }
    },
    methods:{

    myName: function () {
        //return "Eu ma numesc" + this.fname + " " + this.lname + "si sunt din" + this.address;
        return `Eu ma numesc ${this.fname} ${this.lname}  si sunt din ${this.address}`;
        }
    }
}).mount('#app');