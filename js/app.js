var app = new Vue({
    el: '#test',
    data: {
        message: 'Bismillah, coding pertama Vue saya.',
        textArea: '',
        radioButton: '',
        selectPrg: '',
        favoritMovie: ['Spiderman', 'Batman', 'Justoce', 'Avengers'],
        addMovie: '',
        show: true,
        message1: 'ready 1',
        message2: 'ready 2',
        int1: 15,
        int2: 15,
        result: null,
        kilometers: 0,
        meters: 0
    },
    //computed saved in var, same as cache
    computed: {
        sum: function(){
            return this.int1 + this.int2;
        },
    },
    //method, give even exp v-onclick to run this func
    //next buat hitung2an dinamis
    methods: {
        minProcess: function(){
            return this.result = this.int1 - this.int2;
        },
        saveMovie: function(){
            this.favoritMovie.push(this.addMovie)
            this.addMovie = ''
        },
        removeMovie: function(index){
            this.favoritMovie.splice(index,1)
        }
    },
    //watch, prop harus sama dgn data prop, dan ini dirun ketika ada perubahan data dan melihat propertinya masing2
    watch: {
        kilometers: function(val){
            this.kilometers = val;
            this.meters = val * 1000;
        },
        meters: function(val){
            this.kilometers = val / 1000;
            this.meters = val;
        }
    }
})