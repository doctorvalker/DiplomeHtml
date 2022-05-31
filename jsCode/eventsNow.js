const eventsNow = {template:`
<h1 class='themeCss'>А что идёт сейчас?</h1>
<div class="eventsList" v-for="evN in eventNow">
    <div class= eventCard>
       <img class="cardIMG" :src="evN.eventPicture">
       <p class = "textInfo">{{evN.eventName}}</p>
       <router-link class="buttMenu" :to="{name: 'eventInfo', params: {id: evN.eventId}}">Узнать больше</router-link>
    </div>
</div>
`,

data(){
    return{
        eventNow:[]
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"EventsNow")
        .then((response)=>{
            this.eventNow=response.data;
        });
    }
},
mounted:function(){
    this.refreshData();
}

}