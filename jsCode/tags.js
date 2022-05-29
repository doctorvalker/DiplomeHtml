const tags = {template:`
    <div class="tagsList">
        <div class= tagCard v-for="tg in tags">
        <router-link class="buttMenu" to="/eventsTags/{{tg.tagId}}">{{tg.tag}}</router-link>
        </div>
    </div>
`,

data(){
return{
    tags:[],
}
},
methods:{
refreshData(){
    axios.get(variables.API_URL+"Tags")
    .then((response)=>{
        this.tags=response.data;
    });
}
},
mounted:function(){
this.refreshData();
}

}