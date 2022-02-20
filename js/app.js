Vue.component('greeting', {
    template: `
        <div>
            <h1>Hello Vue from Component!</h1>
        </div>
    `
});

Vue.component('button-counter', {
    data: function(){
        return {
            count : 0
        }
    },
    template: `
        <button v-on:click="count++">Clicked {{ count }} times</button>
    `
});

//data prop di dpt dari luar dgn directive binding 'post'. dan v-html utk generate konten html
Vue.component('blog-post', {
    props: ['post'],
    template:
    `
    <div>
        <h3>{{post.title}}</h3>
        <div v-html="post.content"></div>
    </div>
    `
});

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
        meters: 0,
        posts: [
            { id: 1, title: 'Marvel VS DC', content: 'The Legendary battle between two big fandom heroes of multiversal studios' },
            { id: 2, title: 'Spiderman identity revealed?', content: 'Identity of spiderman is revealed by the mighty hero of eart 616 Mysterio!?' },
            { id: 3, title: 'Fantastic 4 Go International', content: 'Reed Richard AKA Mr. Fantastic will open the biggest even in century to research the multitalent of human.' },
        ]
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