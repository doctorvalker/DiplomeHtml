const submitApp={template:`
    <div>
    <h1>Оставить заявку</h1>
    <input class="inputInfo" type="text" v-model="eventName" placeholder="Название мероприятия"/>
    <input class="inputInfo" type="text" v-model="eventDescription" placeholder="Описание мероприятия"/>
    <input class="inputInfo" type="data" v-model="dateOfStart" placeholder="Начало мероприятия"/>
    <input class="inputInfo" type="data" v-model="dateOfEnd" placeholder="Конец мероприятия"/>
    <input class="inputInfo" type="text" v-model="address" placeholder="Адрес"/>
    <input class="inputInfo" type="text" v-model="tagId" placeholder="Тематика"/>
    <button @="addEvent">Добавить мероприятие</button>
    <p class="tagInfo">Код тематик</p>
    <div class="tagInfo" v-for="tg in tags">
        <p>{{tg.tagId}} - {{tg.tag}}</p>
    </div>
    <p class="dateInfo">Форма заполнения даты: ДД/ММ/ГГГГ</p>
    </div>
`,

data(){
return{
    tags:[],
    eventName:"",
    eventDescription:"",
    dateOfStart:"",
    dateOfEnd:"",
    address:"",
    tagId:""
}
},
methods:{
refreshData(){
    axios.get(variables.API_URL+"Tags")
    .then((response)=>{
        this.tags=response.data;
    });
},
addEvent(){
    axios.post(variables.API_URL+"EventsInfo",{
        eventName:this.eventName,
        eventDescription:this.eventDescription,
        dateOfStart:this.dateOfStart,
        dateOfEnd:this.dateOfEnd,
        address:this.address,
        tagId:this.tagId
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