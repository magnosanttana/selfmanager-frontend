<template>
  <div class="container-fluid">
        <div class="block-header">
            <h2>Dentistas > 
                <span v-if="mode == 'new'">Novo</span>
                <span v-else>Editar</span>
            </h2>
        </div>

         <!-- Hover Rows -->
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="header">
                            <h2 v-if="mode == 'new'">
                                Novo cadastro
                            </h2>
                            <h2 v-else>
                                Edição de cadastro - {{dentist.name}}
                            </h2>
                            
                            
                        </div>
                        <div class="body table-dentistas">
                            <Alert v-if="isShowAlert" titulo="Atenção, verifique as informações abaixo:" :msgs="msgs"/>
                            <form>
                                    <div class="row">
                                        <div class="col-md-6">

                                            <div class="form-group">
                                                 <label class="form-label">Nome</label>
                                                <div class="form-line">
                                                    <input type="text" id="nome" required v-model="dentist.name" class="form-control">
                                                   
                                                </div>
                                            </div>
                                        </div>

                                         <div class="col-md-6">
                                             <div class="form-group">
                                                 <label class="form-label">Gênero</label>
                                                <div class="demo-radio-button">
                                                    
                                                    <input name="group1" required type="radio" value="m" id="radio_1" v-model="dentist.gender">
                                                    <label for="radio_1">Masculino</label>
                                                    <input name="group1" type="radio" value="f" id="radio_2" v-model="dentist.gender">
                                                    <label for="radio_2">Feminino</label>
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">CPF</label>
                                                <div class="form-line">
                                                    <input type="text" required id="cpf" v-model="dentist.cpf" class="form-control">
                                                    
                                                </div>
                                            </div>
                                        </div>

                                         <div class="col-md-6">
                                             <div class="form-group">
                                                 <label class="form-label">Data de nascimento</label>
                                                <div class="form-line">
                                                    <input type="date" id="data_nascimento" v-model="dentist.date_of_birth" class="form-control">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">RG</label>
                                                <div class="form-line">
                                                    <input type="text" id="rg" class="form-control" v-model="dentist.rg">
                                                    
                                                </div>
                                            </div>
                                        </div>

                                         <div class="col-md-6">
                                             <div class="form-group">
                                                 <label class="form-label">Órgão Emissor</label>
                                                <div class="form-line">
                                                    <input type="text" id="orgao_emissor" class="form-control" v-model="dentist.agency">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-label">Estado Civil</label>
                                                <div class="form-line">
                                                   <select class="form-control" v-model="dentist.marital_status_id">
                                                        <option v-for="status in estadoCivil" :key="status.id" :value="status.id">{{status.name}}</option>
                                                    </select>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                         <div class="col-md-4">
                                             <div class="form-group">
                                                 <label class="form-label">Nacionalidade</label>
                                                <div class="form-line">
                                                    <input type="text" id="nacionalidade" class="form-control" v-model="dentist.nationality">
                                                    
                                                </div>
                                            </div>
                                        </div>

                                         <div class="col-md-4">
                                             <div class="form-group">
                                                 <label class="form-label">Cidade de Nascimento</label>
                                                <div class="form-line">
                                                    <input type="text" id="cidade_nascimento" class="form-control" v-model="dentist.place_of_birth">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-label">CEP</label>
                                                <div class="form-line">
                                                   <input type="text" id="cep" class="form-control" v-model="dentist.address_postcode">
                                                    
                                                </div>
                                            </div>
                                        </div>

                                         <div class="col-md-4">
                                             <div class="form-group">
                                                 <label class="form-label">Endereço</label>
                                                <div class="form-line">
                                                    <input type="text" id="endereco" class="form-control" v-model="dentist.address_address">
                                                    
                                                </div>
                                            </div>
                                        </div>

                                         <div class="col-md-4">
                                             <div class="form-group">
                                                 <label class="form-label">Número</label>
                                                <div class="form-line">
                                                    <input type="text" id="numero" class="form-control" v-model="dentist.address_number">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-label">Bairro</label>
                                                <div class="form-line">
                                                   <input type="text" id="bairro" class="form-control" v-model="dentist.address_secondary_address">
                                                    
                                                </div>
                                            </div>
                                        </div>

                                         <div class="col-md-4">
                                             <div class="form-group">
                                                 <label class="form-label">Cidade</label>
                                                <div class="form-line">
                                                    <input type="text" id="cidade" class="form-control" v-model="dentist.address_city">
                                                    
                                                </div>
                                            </div>
                                        </div>

                                         <div class="col-md-4">
                                             <div class="form-group">
                                                 <label class="form-label">UF</label>
                                                <div class="form-line">
                                                    <select class="form-control" v-model="dentist.address_state">
                                                       <option value="AC">AC</option>
                                                        <option value="AL">AL</option>
                                                        <option value="AP">AP</option>
                                                        <option value="AM">AM</option>
                                                        <option value="BA">BA</option>
                                                        <option value="CE">CE</option>
                                                        <option value="DF">DF</option>
                                                        <option value="ES">ES</option>
                                                        <option value="GO">GO</option>
                                                        <option value="MA">MA</option>
                                                        <option value="MT">MT</option>
                                                        <option value="MS">MS</option>
                                                        <option value="MG">MG</option>
                                                        <option value="PA">PA</option>
                                                        <option value="PB">PB</option>
                                                        <option value="PR">PR</option>
                                                        <option value="PE">PE</option>
                                                        <option value="PI">PI</option>
                                                        <option value="RJ">RJ</option>
                                                        <option value="RN">RN</option>
                                                        <option value="RS">RS</option>
                                                        <option value="RO">RO</option>
                                                        <option value="RR">RR</option>
                                                        <option value="SC">SC</option>
                                                        <option value="SP">SP</option>
                                                        <option value="SE">SE</option>
                                                        <option value="TO">TO</option>
                                                    </select>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label class="form-label">Email</label>
                                                <div class="form-line">
                                                   <input type="text" id="email" class="form-control" v-model="dentist.email">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                         <div class="col-md-12">
                                            <h5> Alvará</h5>
                                         </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                                 <label for="exampleFormControlFile1">Selecione o seu alvará (DOC, PDF, PNG, JPEG, GIF)</label>
                                                 <input type="file" class="form-control-file" id="form-file" ref="files" @change="handleFiles()">
                                        </div>
                                    </div>

                                  

                                    <div class="row">
                                         <div class="col-md-12">
                                            <h5> Telefones de contato</h5>
                                         </div>
                                    </div>
                                    <div class="row" v-for="(phone,i) in dentist.phones" :key="i">
                                        <div class="col-md-4">
                                             <div class="form-group">
                                                 <label class="form-label">Tipo </label>
                                                <div class="form-line">
                                                    <select class="form-control" v-model="dentist.phones[i].type">
                                                        <option>Fixo residencial</option>
                                                        <option>Fixo comercial</option>
                                                        <option>Celular</option>
                                                    </select>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                         <div class="col-md-4">
                                             <div class="form-group">
                                                 <label class="form-label">Número</label>
                                                <div class="form-line">
                                                    <input type="text" class="form-control" v-model="dentist.phones[i].number">
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                             <div class="form-group">
                                                    
                                                <button v-if="i == 0" type="button" class="btn btn-success btn-circle-lg 
                                                waves-effect waves-circle waves-float float-right" title="Novo" @click="addPhoneNumber()">
                                                    <i class="material-icons">add_circle</i>
                                                </button>
                                                <button v-else type="button" class="btn btn-danger btn-circle-lg 
                                                waves-effect waves-circle waves-float float-right" title="Novo" @click="removePhoneNumber(i)">
                                                    <i class="material-icons">remove_circle</i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                    
                                    <div class="row">
                                        <div class="col-md-12">
                                            <button type="button" class="btn waves-effect btn-primary btn-lg" @click="save()">Salvar</button>
                                             <router-link to="/dentistas"> 
                                                <button type="button" class="btn waves-effect btn-lg" data-dismiss="modal">Cancela</button>
                                            </router-link>
                                        </div>
                                    </div>
                                </form>

                          
                        </div>
                    </div>
                </div>
            </div>


  </div>
</template>

<script>

import Alert from '@/components/widgets/Alert'
export default {
    props: ['id'],
    name: 'Dentistaform',
    components: {Alert},
    data: function(){
        return {
            mode: 'new',
            dentist: {
                phones: [
                    {type: '', number: ''}
                ]
            },
            
            estadoCivil: [
                {id: 1, name: 'Solteiro'},
                {id: 2, name: 'Casado'},
            ],
            file: '',
            isShowAlert: false,
            msgs: []
        }
    },

    methods:{
        loadMaritalStatus(){
            this.$http.get('/marital-status').then( res => {
                this.estadoCivil = res.data.data
            })
        },

        loadDentist(id){
            this.$http.get('/dentists/'+id).then( res => {
                
                if(!res.data){
                    this.$router.push('/dentistas')
                }

                this.dentist = res.data
                if(!this.dentist.phones.length){
                    this.dentist.phones = [{type: '', number: ''} ]
                }
            }).catch((err) => {
               this.showMsgToast('Erro inesperado! Tente novamente ou contate o suporte!', 'erro')
            })
        },

        addPhoneNumber(){
            
            this.dentist.phones.push({type: '', number: ''})
        },

        removePhoneNumber(i){
            this.dentist.phones.splice(i, 1);
        },

        handleFiles() {
            console.log(this.$refs.files.files)
             this.file = this.$refs.files.files[0]
        },
        save(){

            
            this.isShowAlert = false
            this.msgs = []
            let method = (this.mode == 'new') ? 'post' : 'put'
            let id = (this.mode == 'new') ? '' : '/'+this.id
            

            let formData = new FormData();
            let data = this.dentist;
            data.license = ''
            console.log(data);
            //if(this.file)
              //  data.license = this.file

            for(let dado in data){
                if(dado == 'phones'){
                    let phones = data[dado]
                    for(let indice in phones){
                        formData.append('phones['+indice+'][type]', phones[indice].type);
                        formData.append('phones['+indice+'][number]', phones[indice].number);
                    }
                }else if(dado == 'license'){
                    if(this.file){
                        formData.append('license', this.file);
                    }
                }else{
                    formData.append(dado, data[dado]);
                }
                
            }

            if(this.mode != 'new'){
               formData.append('_method', 'put');
            }

            //console.log(formData.getAll())
            //return;

            this.$http.post('/dentists'+id, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then( res => {
                this.showMsgToast('Usuário salvo com sucesso!', 'sucesso', 'top-center')
                this.$router.push('/dentistas')

            }).catch((err) => {
                if(err.response.status == 422){
                    this.isShowAlert = true;
                    this.msgs = err.response.data.error
                    this.showMsgToast('Campos obrigatórios não informados', 'erro')
                }else{
                    this.showMsgToast('Erro inesperado! Tente novamente ou contate o suporte!', 'erro')
                }
            })
        },

        clearDentist(){
            this.dentist = {
                phones: [
                    {type: '', number: ''}
                ]
            }
        },

        showMsgToast(msg, type,  direcao = 'bottom-center'){
            let icone = (type == 'erro') ? 'warning' : 'check'
            this.$toasted.show(msg,{ 
                theme: "bubble", 
                position: direcao,
                icon : icone
            })
        }
    },

    mounted: function(){

        if(this.id){
          this.mode = 'edit'
          this.loadDentist(this.id);
        }
        this.loadMaritalStatus();
        
    },


}
</script>

<style>
.table-dentistas button{
    margin-right: 10px;
}

.header button{
    float: right;
}

</style>