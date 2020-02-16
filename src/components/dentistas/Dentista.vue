<template>
  <div class="container-fluid">
        <div class="block-header">
            <h2>DENTISTAS</h2>
        </div>

         <!-- Hover Rows -->
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="header">
                            <h2>
                                Dentistas cadastrados
                               <!-- <small>Add <code>.table-hover</code> to enable a hover state on table rows within 
                               a <code>&lt;tbody&gt;</code>.</small> -->
                            </h2>
                             <router-link to="/dentistas/novo"> 
                                <button type="button" class="btn btn-success btn-circle-lg waves-effect waves-circle waves-float float-right" title="Adicionar Dentista" >
                                    <i class="material-icons">add_circle</i>
                                </button>
                            </router-link>
                             
                            
                        </div>
                        <div class="body table-responsive table-dentistas">
                            <table class="table table-hover" v-if="dentistas.length">
                                <thead>
                                    <tr >
                                        <th>#</th>
                                        <th>Nome</th>
                                        <th>Email</th>
                                        <th>CPF</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(dentista,i) in dentistas" :key="dentista.id">
                                        <th scope="row">{{i + 1}}</th>
                                        <td>{{dentista.name}}</td>
                                        <td>{{dentista.email}}</td>
                                        <td>{{dentista.cpf}}</td>
                                        <td>
                                            
                                            <a :href="'http://apiselfmanager.magnosanttana.com.br/storage/'+dentista.license" target="_blank" class="btn bg-grey waves-effect" title="Visualizar Alvará">
                                                <i class="material-icons">insert_drive_file</i>
                                            </a>
                                            <button type="button" class="btn bg-grey waves-effect" title="Visualizar usuário" data-toggle="modal" data-target="#largeModal" 
                                            data-backdrop="static" data-keyboard="false" @click="openDetails(dentista)">
                                                <i class="material-icons">remove_red_eye</i>
                                            </button>
                                            <router-link :to="'/dentistas/editar/'+dentista.id"> 
                                               <button type="button" class="btn bg-light-blue waves-effect" title="Editar usuário">
                                                <i class="material-icons">mode_edit</i>
                                                </button>
                                            </router-link>
                                            
                                            <button type="button" class="btn bg-red waves-effect" title="Excluir usuário" @click="confirmarExclusao(dentista)">
                                                <i class="material-icons">delete</i>
                                            </button>
                                        </td>
                                    </tr>
                                  
                                </tbody>
                            </table>
                            <span v-else>
                                <h5>Nenhum usuário foi localizado.</h5>
                            </span>

                            <Paginacao :page="page" :total_pages="total_pages" @pageMudou="paginar($event)"/>

                            
                        </div>
                    </div>
                </div>
            </div>
            <!-- #END# Hover Rows -->


            <!-- Large Size -->
            <div v-if="dentista" class="modal fade" id="modal-detalhes" tabindex="-1" role="dialog">
                <div class="vertical-alignment-helper">
                    <div class="modal-dialog modal-lg vertical-align-center" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="largeModalLabel">Detalhes do usuário</h4>
                            </div>
                            <div class="modal-body">
                                    <Detalhes :dentista="dentista"/>
                            </div>
                            
                            
                            <div class="modal-footer">
                                
                                <button type="button" class="btn waves-effect btn-lg" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal exclusao -->
            <div class="modal fade" id="modal-confirmacao-exclusao" tabindex="-1" role="dialog">
                <div class="vertical-alignment-helper">
                    <div class="modal-dialog modal-sm vertical-align-center" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="largeModalLabel2">Confirmação de exclusão</h4>
                            </div>
                            <div class="modal-body">
                                <h5>Tem certeza que deseja excluir esse usuário? <br/> <br/> Esta ação não poderá ser desfeita! </h5>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn waves-effect btn-danger btn-lg" @click="deleteDentista()">Excluir</button>
                                <button type="button" class="btn waves-effect btn-lg" data-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </div>
</template>

<script>
import Detalhes from '@/components/dentistas/Detalhes'
import Paginacao from '@/components/widgets/Paginacao'

export default {
    name: 'Dentista',
    components: {Detalhes, Paginacao},
    data: function(){
        return {
            dentistas: [],
            dentista: {
                marital: {name: ''}
            },
            total: 0,
            page: 1,
            next_page: 1,
            per_page: 0,
            total_pages: 0,
        }
    },

    methods: {
        loadDentists(){
            this.$http.get('/dentists?page='+this.next_page).then( res => {
                this.dentistas = res.data.data
                this.setPararamsPaginate(res)
               
            })
        },
        confirmarExclusao(dentista){
            this.dentista = dentista
            $('#modal-confirmacao-exclusao').modal('show')

        },

        deleteDentista(){
            this.$http.delete('/dentists/'+this.dentista.id).then( res => {
                $('#modal-confirmacao-exclusao').modal('hide')
                this.dentista = {}
                this.next_page = 1
                this.loadDentists()
                this.showMsgToast('Registro excluído com sucesso!', 'sucesso', 'top-center')
            }).catch((err) => {
                $('#modal-confirmacao-exclusao').modal('hide')
               this.showMsgToast('Erro inesperado! Tente novamente ou contate o suporte!', 'erro')
            })
        },

        showMsgToast(msg, type,  direcao = 'bottom-center'){
            let icone = (type == 'erro') ? 'warning' : 'check'
            this.$toasted.show(msg,{ 
                theme: "bubble", 
                position: direcao,
                icon : icone
            })
        },
        openDetails(dentista){
            this.loadDentist(dentista.id);
             $('#modal-detalhes').modal('show')
        },
        loadDentist(id){
            this.$http.get('/dentists/'+id).then( res => {
                this.dentista = res.data
            }).catch((err) => {
               this.showMsgToast('Erro inesperado! Tente novamente ou contate o suporte!', 'erro')
            })
        },
        setPararamsPaginate(res){
             this.total = res.data.total
             this.page = res.data.current_page
             this.per_page = res.data.per_page
             this.total_pages = Math.round(this.total / this.per_page)
             this.next_page = this.page + 1
        },
        paginar(page){
            if((page <= this.total_pages) && this.page >=1){
                this.next_page = page
                this.loadDentists();
            }
            
        }

    },

    mounted: function(){
       this.loadDentists()
    }
}
</script>

<style>
.table-dentistas button{
    margin-right: 10px;
}
.table-dentistas a{
    margin-right: 10px;
}

.header button{
    float: right;
}

.vertical-alignment-helper {
    display:table;
    height: 100%;
    width: 100%;
    pointer-events:none; /* This makes sure that we can still click outside of the modal to close it */
}
.vertical-align-center {
    /* To center vertically */
    display: table-cell;
    vertical-align: middle;
    pointer-events:none;
}
.modal-content {
    /* Bootstrap sets the size of the modal in the modal-dialog class, we need to inherit it */
    width:inherit;
    max-width:inherit; /* For Bootstrap 4 - to avoid the modal window stretching full width */
    height:inherit;
    /* To center horizontally */
    margin: 0 auto;
    pointer-events: all;
}

</style>