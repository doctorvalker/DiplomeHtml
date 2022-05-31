const eventsInfo = {template:`
    <div class="evInfo" v-for="evIn in eventInfo">
        <img class="eventIMG" :src="evIn.eventPicture"/>
        <p class="eventNm">{{evIn.eventName}}</p>
        <p class="eventDs">{{evIn.eventDescription}}</p>
        <p class="dts">Дата проведения</p>
        <p class="DOSE">{{evIn.dateOfStart}} - {{evIn.dateOfEnd}}</p>
        <p class="ddrss">Место проведения</p>
        <p class="address">{{evIn.address}}</p>
        <p class="markAVG" v-for="mrk in marks">Средняя оценка: {{mrk.mark}}</p>
        <input class="markText" type="text" v-model="mark" placeholder="Оцеить от 1 до 5"/>
        <button class="markText" @click="addMark">Оценить</button>
        <div class="cmmnts">
            <div v-for="cmmnt in comments">
                <p>{{cmmnt.userName}}</p>
                <p>{{cmmnt.comment}}</p>
            </div>
        </div>
        <div class="cmmntsPost">
                <input class="cmmntText" type="text" v-model="comment" placeholder="Комментарий"/>
                <button class="cmmntText" @click="addComment">Добавить комментарий</button>
            </div>
    </div>
`,

data(){
return{
    eventInfo:[],
    marks:[],
    comments:[],
    comment:"",
    mark:"",
    userId:0
}
},
methods:{
refreshData(){
    axios.get(variables.API_URL+"EventsInfo/" + this.$route.params.id)
    .then((response)=>{
        this.eventInfo=response.data;
    });
    axios.get(variables.API_URL+"Marks/" + this.$route.params.id)
    .then((response)=>{
        this.marks=response.data;
    });
    axios.get(variables.API_URL+"Comments/" + this.$route.params.id)
    .then((response)=>{
        this.comments=response.data;
    });
},
addMark(){
    axios.post(variables.API_URL+"Marks",{
        eventId: this.$route.params.id,
        userId:3,
        mark: this.mark
    }).then((response)=>{
        this.refreshData();
        alert(response.data);
    });
},
addComment(){
    axios.post(variables.API_URL+"Comments",{
        eventId: this.$route.params.id,
        userId:3,
        comment: this.comment
    }).then((response)=>{
        this.refreshData();
        alert(response.data);
    });
}
},
mounted:function(){
this.refreshData();
}

}