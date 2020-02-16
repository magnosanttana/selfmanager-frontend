<template>
  <div>

    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active">
            <a href="#profile_with_icon_title" data-toggle="tab">
                <i class="material-icons">face</i> INFO PESSOAIS
            </a>
        </li>
        <li role="presentation" >
            <a href="#home_with_icon_title" data-toggle="tab">
                <i class="material-icons">home</i> ENDEREÇO
            </a>
        </li>
        
        <li role="presentation">
            <a href="#messages_with_icon_title" data-toggle="tab">
                <i class="material-icons">email</i> CONTATOS
            </a>
        </li>
        <li role="presentation">
            <a href="#settings_with_icon_title" data-toggle="tab">
                <i class="material-icons">assignment</i> ALVARÁ
            </a>
        </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
        <div role="tabpanel" class="tab-pane fade in active" id="profile_with_icon_title">
            <div class="row clearfix">
                <div class="col-md-3">
                    <b>Nome</b> {{dentista.name}}
                </div>
                <div class="col-md-2">
                    <b>Sexo</b> {{(dentista.gender == 'm') ? 'Masculino' : 'Feminino'}}
                </div>
                <div class="col-md-4">
                    <b>Data de nascimento</b> {{dentista.date_of_birth}}
                </div>
                <div class="col-md-3">
                    <b>Local</b> {{dentista.place_of_birth}}
                </div>
            </div>
            <div class="row clearfix">
                <br/>
                <div class="col-md-3">
                    <b>RG</b> {{dentista.rg}}
                </div>
                <div class="col-md-3">
                    <b>Órgão Emissor</b> {{dentista.agency}}
                </div>
                <div class="col-md-3">
                    <b>CPF</b> {{dentista.cpf}}
                </div>
                <div class="col-md-3">
                    <b>Estado Civil</b> {{dentista.marital.name}}
                </div>
            </div>
            <div class="row clearfix">
                <br/>
                <div class="col-md-3">
                    <b>Nacionalidade</b> {{dentista.nationality}}
                </div>
            </div>
            
        </div>
        <div role="tabpanel" class="tab-pane fade " id="home_with_icon_title">
            <div class="row clearfix">
                <div class="col-md-2">
                    <b>CEP</b> {{dentista.address_postcode}}
                </div>
                <div class="col-md-8">
                    <b>Endereço</b> {{dentista.address_address}} 
                </div>
                    <div class="col-md-1">
                    <b>N.</b> {{dentista.address_number}}
                </div>
            </div>
                <div class="row clearfix">
                    <br/>
                <div class="col-md-4">
                    <b>Bairro/Complemento</b> {{dentista.address_secondary_address}}
                </div>
                <div class="col-md-6">
                    
                    <b>Cidade</b> {{dentista.address_city}} / {{dentista.address_state}}
                </div>
            </div>
        </div>
        
        <div role="tabpanel" class="tab-pane fade" id="messages_with_icon_title">
            <div class="row clearfix">
                <div class="col-md-6">
                    <b>Email</b> {{dentista.email}}
                    <br/><br/><b>Telefones</b> <br/><br/>
                </div>
            </div>
                <div class="row" >
                    
                <div class="col-md-4" v-for="phone in dentista.phones" :key="phone.number">
                    <b>{{phone.type}}</b> {{phone.number}}
                </div>
            </div>
        </div>
        <div role="tabpanel" class="tab-pane fade" id="settings_with_icon_title">
            
            <p align="center">
                <b>Clique no botão abaixo para visualizar</b><br/>
                <!-- <button type="button" class="btn btn-default btn-circle-lg waves-effect waves-circle waves-float">
                    <i class="material-icons">cloud_download</i>
                </button> -->
                <a :href="'http://apiselfmanager.magnosanttana.com.br/storage/'+dentista.license" target="_blank" class="btn btn-default btn-circle-lg waves-effect waves-circle waves-float" title="Visualizar Alvará">
                <i class="material-icons">cloud_download</i>
            </a>
            </p>
        </div>
    </div>
    <div class="row clearfix">
                                
        <div class="col-md-4 col-md-offset-8">
            <b>Data do cadastro: {{dentista.created_at}}</b>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Detalhes',
    props: ['dentista']
}
</script>

<style>

</style>