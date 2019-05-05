var vm = new Vue({
    el: "#app",
    data: {
        totalMoney: 0,
        productList: [],
    },
    filters: {

    },
    mounted: function(){

    },
    methods: {
        creatView: function(){
            var that = this;
            this.$http.get("../data/cart.json",{"id": 123}).then(function(res){
                console.log(111);
                that.productList = res.result.list;
                that.totalMoney  = res.totalMoney;
            })
        }
    }
})