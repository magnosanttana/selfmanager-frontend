<template>
  <div class="container-fluid">
        <div class="block-header">
            <h2>Tecnologias Utilizadas</h2>
        </div>

        <div class="row clearfix">
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box">
                        <div class="icon bg-red">
                            <i class="material-icons">extension</i>
                        </div>
                        <div class="content">
                            <div class="text">Versão 5.5 LTS</div>
                            <div class="number count-to" data-from="0" data-to="125" data-speed="1000" data-fresh-interval="20">LARAVEL</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box">
                        <div class="icon bg-indigo">
                            <i class="material-icons">settings_applications</i>
                        </div>
                        <div class="content">
                            <div class="text">Versão 7.1</div>
                            <div class="number count-to" data-from="0" data-to="257" data-speed="1000" data-fresh-interval="20">PHP</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box">
                        <div class="icon bg-orange">
                            <i class="material-icons">format_align_center</i>
                        </div>
                        <div class="content">
                            <div class="text">Versão 8.0</div>
                            <div class="number count-to" data-from="0" data-to="117" data-speed="1000" data-fresh-interval="20">MYSQL</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box">
                        <div class="icon bg-green">
                            <i class="material-icons">add_to_queue</i>
                        </div>
                        <div class="content">
                            <div class="text">Versão 2</div>
                            <div class="number count-to" data-from="0" data-to="1432" data-speed="1500" data-fresh-interval="20">Vue.js</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="header">
                            <h2>
                                Repositórios
                            </h2>
                        </div>
                        <div class="body">
                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs tab-nav-right" role="tablist">
                                <li role="presentation" class="active"><a href="#home" data-toggle="tab">FRONTEND</a></li>
                                <li role="presentation"><a href="#profile" data-toggle="tab">BACKEND</a></li>
                                <li role="presentation"><a href="#messages" data-toggle="tab">OUTRAS INFO</a></li>
                            </ul>

                            <!-- Tab panes -->
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane fade in active" id="home">
                                    
                                    <p>
                                      <b>
                                        O código fonte desta interface encontra-se no repositório do GitHub no seguinte endereço: <br/><br/>
                                        <a href="https://github.com/magnosanttana/selfmanager-frontend" target="_blank">https://github.com/magnosanttana/selfmanager-frontend</a>
                                       </b>
                                    </p>
                                </div>
                                <div role="tabpanel" class="tab-pane fade" id="profile">
                                    <p>
                                      <b>
                                        Já o código fonte da API encontra-se no seguinte endereço: <br/>
                                        <a href="https://github.com/magnosanttana/selfmanager-api" target="_blank">https://github.com/magnosanttana/selfmanager-api</a>
                                       </b>
                                    </p>
                                    <br/>
                                    <p>
                                      <b>
                                        A API também encontra-se publicada, para testes, no endereço: <br/>
                                        <a href="http://apiselfmanager.magnosanttana.com.br" target="_blank">http://apiselfmanager.magnosanttana.com.br</a>
                                       </b>
                                    </p>
                                </div>
                                <div role="tabpanel" class="tab-pane fade" id="messages">
                                    <b>Requisitos do teste</b><br/>
                                    <p>
                                       Abaixo, ZIP contendo as histórias de usuários e demais requisitos do teste <br/><br/>
                                    </p>
                                    <p align="">
                                       <a href="http://apiselfmanager.magnosanttana.com.br/requisitos-teste.zip" target="_blank" class="btn btn-default btn-circle-lg waves-effect waves-circle waves-float" title="Visualizar Alvará">
                <i class="material-icons">cloud_download</i> </a>
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
  </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>

</style>