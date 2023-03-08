Vue.createApp({
    data() {
        return {
        linkImg: "https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
        nameVal: "",
        ageVal: null,
        age: this.ageVal
    };
    },
    methods: {
        addTen(){
            return 10+this.ageVal;
        },
        numberRandom() {
            nbRandom = Math.random();
            if(nbRandom>0.5){
                return "Le nombre est supérieur à 0.5";
            }
            else{
                return nbRandom;
            }
        },
    },
    }).mount('#app');