const eventsPast = {template:`
<div class="mainMenu">
<h1 class='themeCss'>А что упустили?</h1>
<div class="eventsList">
    <div class= eventCard v-for="evP in eventPast">
    <img class="cardIMG" :src="evP.eventPicture"/>
    <p class = "textInfo">{{evP.eventName}}</p>
    <router-link class="buttMenu" :to="{name: 'eventInfo', params: {id: evP.eventId}}">Узнать больше</router-link>
    </div>
</div>
</div>
`,

data(){
return{
    eventPast:[]
}
},
methods:{
refreshData(){
    axios.get(variables.API_URL+"EventsPast")
    .then((response)=>{
        this.eventPast=response.data;
    });
}
},
mounted:function(){
this.refreshData();
}

}