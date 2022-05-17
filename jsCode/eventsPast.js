const eventsPast = {template:`
<h1 class='themeCss'>А что упустили?</h1>
<div class="eventsList">
    <div class= eventCard v-for="evP in eventPast">
        <img src="{{evP.eventPicture}}">
        <p>{{evP.eventName}}</p>
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