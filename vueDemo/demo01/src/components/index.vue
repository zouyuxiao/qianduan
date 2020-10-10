<template>
    <div>
        <div>头</div>
        <div>
            <h1>你好啊vue</h1>
            <h2>haha</h2>
            <div>
                <h1>WHY</h1>
            </div>
            <div>
                <Button @click="handleClick">点击调用子组件方法</Button>
            </div>
            <div>
                <ul>
                    <li v-for="(item,index) in list" :key="index">{{list[index].username}}</li>
                </ul>
            </div>
        </div>

        <div class="hone">
            <Footer />
            <!-- <router-link to="footer">脚部组件</router-link> -->
        </div>
        
    </div>
</template>
<script>
import { list } from "../api/api" 
import axios from 'axios'
import Footer from '@/components/footer'


function getList() {
            console.log("hello");
            axios.get('http://192.168.3.31:8031/user/list')
                .then(function (response) {
                    console.log(response);
                    console.log("code==>"+response.data.code);
                    let data = response.data.data
                    console.log("data==>" + data);
                    for (const i in data) {
                        if (data.hasOwnProperty(i)) {
                            const element = data[i];
                            console.log(element);
                        }
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
getList();
export default {

    data(){
        return{
            list:[]
        }
    },

    methods(){
        this.getLis2t();
    },
    
    methods: {
        handleClick() {
            console.log("你老味");
            list().then(
                response =>{
                    console.log("response"+response);
                    console.log("code==>"+response.data.code);
                    this.list = response.data.data;
                    console.log(this.list[0].username);
                }
            )
        },
    },  
    
    components:{
        Footer,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
