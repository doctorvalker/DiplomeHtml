const eventsFuture = {template:`
<h1 class='themeCss'>А что там дальше?</h1>
<div class="eventsList">
    <div class= eventCard v-for="evF in eventFuture">
        <img class="cardIMG" :src="{{evF.eventPicture}}">
        <p class = "textInfo">{{evF.eventName}}</p>
        <router-link class="buttMenu" :to="{name: 'eventInfo', params: {id: evP.eventId}}">Узнать больше</router-link>
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