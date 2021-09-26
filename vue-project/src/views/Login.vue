<template>
    <v-container fill-height style="max-width:450px">
        <v-layout align-center row wrap>
            <v-flex xs12>
                <v-alert
                    class="mb-3"
                    :value="isError"
                    type="error"
                 >
                    아이디와 비밀번호를 확인해주세요.
                </v-alert>
                 <v-alert
                    class="mb-3"
                    :value="loginSuccess"
                    type="success"
                    >
                    로그인이 완료되었습니다.
                 </v-alert>
                <v-card>
                    <v-toolbar flat height="30">
                        <v-toolbar-title>로그인</v-toolbar-title>
                    </v-toolbar>
                    <div class="pa-3">
                    <v-text-field
                        v-model="email"
                        label="이메일을 입력해주세요"
                    >
                    </v-text-field>
                
                    <v-text-field
                        v-model="password"
                        type="password"
                        label="비밀번호를 입력해주세요"
                    >
                    </v-text-field>
                    <v-btn
                     color="primary"
                     depressed
                     block
                     large
                     @click="login('로그인!')"
                     >
                     로그인</v-btn>
                    </div>
                </v-card>        
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {mapState,mapActions} from "Vuex"
export default {
    data(){
        return {
            email:null,
            password:null,
            
            isError:false, //에러 alert창
            loginSuccess:false
        }
    },
    methods:{
        ...mapActions(["login"])
        //login(){
            //전체 유저에서 해당 이메일로 유저를 찾는다.
            //let selectedUser = null
            //this.allUsers.forEach(user =>{
            //    if(user.email === this.email) selectedUser = user
            //})
            //selectedUser === null
            //  ? (this.isError = true) //null 일경우 isError가 true -> 에러창 뜸
            // : selectedUser.password !== this.password //null 아니고 
            //    ? (this.isError = true) //일치하지 않을 경우
            //    : (this.loginSuccess = true) //일치하면(else)
            // 그 유저의 비밀번호와 입력된 비밀번호를 비교한다.
        //}
    }
}
</script>
