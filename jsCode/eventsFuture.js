const eventsFuture = {template:`
<h1 class='themeCss'>А что там дальше?</h1>
<div class="eventsList">
    <div class= eventCard v-for="evF in eventFuture">
        <img src="{{evF.eventPicture}}">
        <p>{{evF.eventName}}</p>
    </div>
</div>
`,

data(){
return{
    eventFuture:[]
}
},
methods:{
refreshData(){
    axios.get(variables.API_URL+"EventsFuture")
    .then((response)=>{
        this.eventFuture=response.data;
    });
}
},
mounted:function(){
this.refreshData();
}


}