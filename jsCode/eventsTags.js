const eventsPast = {template:`
<h1 class='themeCss'>А что упустили?</h1>
<div class="eventsList">
    <div class= eventCard v-for="evT in eventTags">
    <img class="cardIMG" :src="evT.eventPicture"/>
    <p class = "textInfo">{{evT.eventName}}</p>
    <router-link class="buttMenu" to="/eventsInfo/{{evT.eventId}}">Узнать больше</router-link>
    </div>
</div>
`,

data(){
return{
    eventTags:[]
}
},
methods:{
refreshData(){
    axios.get(variables.API_URL+"EventsTags")
    .then((response)=>{
        this.eventPast=response.data;
    });
}
},
mounted:function(){
this.refreshData();
}

}