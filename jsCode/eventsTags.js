const eventsTags = {template:`
<div class="eventsList">
    <div class= eventCard v-for="evT in eventTags">
    <img class="cardIMG" :src="evT.eventPicture"/>
    <p class = "textInfo">{{evT.eventName}}</p>
    <router-link class="buttMenu" :to="{name: 'eventInfo', params: {id: evT.eventId}}">Узнать больше</router-link>
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
    console.log(this.$route.params.id)
    axios.get(variables.API_URL+"EventsTags/" + this.$route.params.id)
    .then((response)=>{
        this.eventTags=response.data;
    });
}
},
mounted:function(){
this.refreshData();
}

}